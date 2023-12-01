import { Injectable } from '@nestjs/common';
import { PackageEntity } from 'src/domain/entities';
import { PackageRepository } from 'src/domain/repositories';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PrismaPackageRepository implements PackageRepository {
  constructor(private prismaService: PrismaService) {}

  findById(packageId: string): Promise<PackageEntity | null> {
    return this.prismaService.package.findUnique({
      where: {
        id: packageId,
      },
    });
  }
}
