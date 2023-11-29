import { Installment } from '@prisma/client';

export class InstallmentEntity implements Installment {
  id: string;
  numberOfInstallment: number;
  invoiceId: string;
  paid: boolean;
  paymentDate: Date;
  createdAt: Date;
  updatedAt: Date;
}
