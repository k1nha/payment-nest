import { PackageEntity } from 'src/domain/entities';

export abstract class PackageRepository {
  abstract findById(packageId: string): Promise<PackageEntity | null>;
}
