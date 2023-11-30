import { Controller, Get, Post } from '@nestjs/common';
import { CreateInvoice } from 'src/domain/use-cases/create-invoice.';

@Controller('invoice')
export class CreateInvoiceController {
  constructor(private readonly createInvoice: CreateInvoice) {}

  @Post('/create')
  handle() {
    return this.createInvoice.execute();
  }
}
