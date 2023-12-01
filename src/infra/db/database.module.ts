import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import {
  PrismaInstallmentRepository,
  PrismaInvoiceRepository,
  PrismaPackageRepository,
  PrismaUserRepository,
} from './repositories';
import {
  InstallmentRepository,
  InvoiceRepository,
  PackageRepository,
  UserRepository,
} from 'src/domain/repositories';

@Module({
  imports: [],
  providers: [
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
    {
      provide: InstallmentRepository,
      useClass: PrismaInstallmentRepository,
    },
    {
      provide: InvoiceRepository,
      useClass: PrismaInvoiceRepository,
    },
    {
      provide: PackageRepository,
      useClass: PrismaPackageRepository,
    },
  ],
  exports: [PrismaService, UserRepository],
})
export class DatabaseModule {}
