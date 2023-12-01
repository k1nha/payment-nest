import { CreateInstallmentDTO } from 'src/domain/dto';
import { InstallmentEntity } from 'src/domain/entities';

export abstract class InstallmentRepository {
  abstract create(
    createInstallmentDTO: CreateInstallmentDTO,
  ): Promise<InstallmentEntity>;
}
