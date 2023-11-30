import { $Enums, Package } from '@prisma/client';

export class PackageEntity implements Package {
  id: string;
  type: $Enums.PackageEnum;
  price: number;
}
