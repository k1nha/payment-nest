import { Injectable } from '@nestjs/common';
import { UseCase } from 'src/core/base';
import { InstallmentRepository, InvoiceRepository } from '../repositories';
import { Installment, Invoice } from '@prisma/client';

type Input = {
  userId: string;
  packageId: string;
  renewal?: boolean;
};

type Output = {
  invoice: Invoice;
  installment: Installment[];
};

// one purchase makes a 12 invoices
@Injectable()
export class CreateInvoice implements UseCase<Input, Output> {
  constructor(
    private invoiceRepository: InvoiceRepository,
    private installmentRepository: InstallmentRepository,
    private packageRepository: PackageRepository,
  ) {}

  async execute(input: Input): Promise<Output> {
    // find package
    const package = await this.packageRepository.findById(input.packageId);

    const invoiceInput = {
      finalPrice: package.price * 12,
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
