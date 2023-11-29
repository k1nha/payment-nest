import { Invoice } from '@prisma/client';

export class InvoiceEntity implements Invoice {
  id: string;
  userId: string;
  finalPrice: number;
  packageId: string;
  renewal: boolean;
  renewalDate: Date;
  createdAt: Date;
}
