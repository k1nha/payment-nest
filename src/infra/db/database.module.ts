import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import {
  PrismaInstallmentRepository,
  PrismaInvoiceRepository,
  PrismaUserRepository,
} from './repositories';
import {
  InstallmentRepository,
  InvoiceRepository,
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
  ],
  exports: [PrismaService, UserRepository],
})
export class DatabaseModule {}
