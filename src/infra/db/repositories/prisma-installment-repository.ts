import { Injectable } from '@nestjs/common';
import { Installment } from '@prisma/client';
import { CreateInstallmentDTO } from 'src/domain/dto';
import { InstallmentRepository } from 'src/domain/repositories';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PrismaInstallmentRepository implements InstallmentRepository {
  constructor(private prisma: PrismaService) {}

  async create(
    createInstallmentDTO: CreateInstallmentDTO,
  ): Promise<Installment> {
    return this.prisma.installment.create({
      data: {
        ...createInstallmentDTO,
      },
    });
  }
}
