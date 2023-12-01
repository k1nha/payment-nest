import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UseCase } from 'src/core/base';
import {
  InstallmentRepository,
  InvoiceRepository,
  PackageRepository,
  UserRepository,
} from '../repositories';
import { Installment, Invoice } from '@prisma/client';

type Input = {
  userEmail: string;
  packageId: string;
  renewal?: boolean;
};

type Output = {
  invoice: Invoice;
  installment: Installment[];
};

@Injectable()
export class CreateInvoiceUseCase implements UseCase<Input, Output> {
  constructor(
    private invoiceRepository: InvoiceRepository,
    private installmentRepository: InstallmentRepository,
    private packageRepository: PackageRepository,
    private userRepository: UserRepository,
  ) {}

  async execute(input: Input): Promise<Output> {
    const packageExists = await this.packageRepository.findById(
      input.packageId,
    );

    if (!packageExists) {
      throw new HttpException('Package not exists', HttpStatus.BAD_REQUEST);
    }

    const userExists = await this.userRepository.findByEmail(input.userEmail);

    if (!userExists) {
      throw new HttpException('User not exists', HttpStatus.BAD_REQUEST);
    }

    const invoiceInput = {
      finalPrice: packageExists.price * 12,
      userId: userExists.id,
      ...input,
    };

    const invoiceCreated = await this.invoiceRepository.create(invoiceInput);

    const installmentsCreated = await Promise.all(
      Array.from(Array(12).keys()).map(async (i) => {
        const installment = this.installmentRepository.create({
          numberOfInstallment: i,
          invoiceId: invoiceCreated.id,
        });

        return installment;
      }),
    );

    return {
      invoice: invoiceCreated,
      installment: installmentsCreated,
    };
  }
}
