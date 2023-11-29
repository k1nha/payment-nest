import { Invoice } from '@prisma/client';
import { CreateInvoiceDTO } from 'src/domain/dto';

export abstract class InvoiceRepository {
  abstract create(createInvoiceDTO: CreateInvoiceDTO): Promise<Invoice>;
}
