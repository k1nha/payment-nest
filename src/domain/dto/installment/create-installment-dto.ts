export interface CreateInstallmentDTO {
  invoiceId: string;
  paid?: boolean | null;
  paymentDate?: Date | null;
  numberOfInstallment: number;
}
