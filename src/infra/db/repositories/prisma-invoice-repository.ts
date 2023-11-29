import { Injectable } from '@nestjs/common';
import { InvoiceRepository } from 'src/domain/repositories';
import { PrismaService } from '../prisma/prisma.service';
import { CreateInvoiceDTO } from 'src/domain/dto';
import { Invoice } from '@prisma/client';

@Injectable()
export class PrismaInvoiceRepository implements InvoiceRepository {
  constructor(private prisma: PrismaService) {}

  async create(createInvoiceDTO: CreateInvoiceDTO): Promise<Invoice> {
    return this.prisma.invoice.create({
      data: {
        ...createInvoiceDTO,
      },
    });
  }
}
