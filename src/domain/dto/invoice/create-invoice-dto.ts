export interface CreateInvoiceDTO {
  userId: string;
  finalPrice: number;
  packageId: string;
  renewal?: boolean;
}
