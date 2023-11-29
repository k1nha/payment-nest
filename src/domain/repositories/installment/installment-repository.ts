import { Installment } from '@prisma/client';
import { CreateInstallmentDTO } from 'src/domain/dto';

export abstract class InstallmentRepository {
  abstract create(
    createInstallmentDTO: CreateInstallmentDTO,
  ): Promise<Installment>;
}
