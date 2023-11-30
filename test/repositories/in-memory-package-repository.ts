import { PackageEntity } from 'src/domain/entities';
import { PackageRepository } from 'src/domain/repositories';

export class InMemoryPackageRepository implements PackageRepository {
  public items: PackageEntity[] = [];

  async findById(packageId: string): Promise<PackageEntity | null> {
    const pckge = this.items.find((item) => item.id === packageId);

    if (!pckge) {
      return null;
    }

    return pckge;
  }
}
