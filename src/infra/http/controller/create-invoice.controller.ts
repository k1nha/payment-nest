import { Controller, Get, Post } from '@nestjs/common';
import { CreateInvoice } from 'src/domain/use-cases/create-invoice';
import { PaymentGateway } from 'src/infra/gateway/payment-gateway';
import { StripeGateway } from 'src/infra/gateway/stripe';

@Controller('invoice')
export class CreateInvoiceController {
  constructor(
    private readonly createInvoice: CreateInvoice,
    private readonly paymentGateway: PaymentGateway,
  ) {}

  @Post('/create')
  handle() {
    this.paymentGateway.createUser();
    return this.createInvoice.execute();
  }
}
