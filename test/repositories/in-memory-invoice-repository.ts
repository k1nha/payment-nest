import { randomUUID } from 'crypto';
import { CreateInvoiceDTO } from 'src/domain/dto';
import { InvoiceEntity } from 'src/domain/entities';
import { InvoiceRepository } from 'src/domain/repositories';

export class InMemoryInvoiceRepository implements InvoiceRepository {
  public items: InvoiceEntity[] = [];

  async create(createInvoiceDTO: CreateInvoiceDTO): Promise<InvoiceEntity> {
    const invoice = {
      id: randomUUID(),
      createdAt: new Date(),
      renewalDate: null,
      renewal: false,
      ...createInvoiceDTO,
    };

    this.items.push(invoice);

    return invoice;
  }
}
