export abstract class PaymentGateway {
  abstract createUser(data: any): Promise<any>;
  abstract generateCharge(data: any): Promise<any>;
  abstract createPaymentIntent(data: any): Promise<any>;
}
