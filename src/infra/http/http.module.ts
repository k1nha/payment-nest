import { Module } from '@nestjs/common';
import { DatabaseModule } from '../db/database.module';
import { CreateUserUseCase, CreateInvoiceUseCase } from 'src/domain/use-cases';
import { CreateInvoiceController, CreateUserController } from './controller';
import { StripeGateway } from '../gateway/stripe';
import { PaymentGateway } from '../gateway/payment-gateway';

@Module({
  imports: [DatabaseModule],
  controllers: [CreateUserController, CreateInvoiceController],
  providers: [
    CreateUserUseCase,
    CreateInvoiceUseCase,
    {
      provide: PaymentGateway,
      useClass: StripeGateway,
    },
  ],
})
export class HttpModule {}
