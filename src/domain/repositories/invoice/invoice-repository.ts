import { CreateInvoiceDTO } from 'src/domain/dto';
import { InvoiceEntity } from 'src/domain/entities';

export abstract class InvoiceRepository {
  abstract create(createInvoiceDTO: CreateInvoiceDTO): Promise<InvoiceEntity>;
}
