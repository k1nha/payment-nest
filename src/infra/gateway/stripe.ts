import Stripe from 'stripe';
import { env } from '../env';
import { PaymentGateway } from './payment-gateway';

interface CreateUserStripe {
  email: string;
  name: string;
  phone: string;
  currency: string;
}

interface CreatePaymentIntent {
  amount: number;
  description: string;
  customerId: string;
}

export class StripeGateway extends Stripe implements PaymentGateway {
  constructor() {
    super(env.STRIPE_KEY);
  }

  async createPaymentIntent(
    createPaymentIntent: CreatePaymentIntent,
  ): Promise<Stripe.Response<Stripe.PaymentIntent>> {
    return this.paymentIntents.create({
      currency: 'brl',
      description: 'Cobrança numero ' + createPaymentIntent.description,
      customer: createPaymentIntent.customerId,
      ...createPaymentIntent,
    });
  }

  async createUser(
    createUserStripe: CreateUserStripe,
  ): Promise<Stripe.Response<Stripe.Customer>> {
    return this.customers.create({
      ...createUserStripe,
    });
  }

  async generateCharge() {}
}
