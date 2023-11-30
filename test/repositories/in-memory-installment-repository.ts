import { randomUUID } from 'crypto';
import { CreateInstallmentDTO } from 'src/domain/dto';
import { InstallmentEntity } from 'src/domain/entities';
import { InstallmentRepository } from 'src/domain/repositories';

export class InMemoryInstallmentRepository implements InstallmentRepository {
  public items: InstallmentEntity[] = [];

  async create(
    createInstallmentDTO: CreateInstallmentDTO,
  ): Promise<InstallmentEntity> {
    const installment: InstallmentEntity = {
      id: randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date(),
      invoiceId: createInstallmentDTO.invoiceId,
      numberOfInstallment: createInstallmentDTO.numberOfInstallment,
      paid: createInstallmentDTO.paid,
      paymentDate: createInstallmentDTO.paymentDate,
    };

    this.items.push(installment);

    return installment;
  }
}
