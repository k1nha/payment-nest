import { InMemoryUserRepository } from 'test/repositories/in-memory-user-repository';
import { CreateInvoice } from './create-invoice.';
import { InMemoryPackageRepository } from 'test/repositories/in-memory-package-repository';
import { InMemoryInvoiceRepository } from 'test/repositories/in-memory-invoice-repository';
import { InMemoryInstallmentRepository } from 'test/repositories/in-memory-installment-repository';

const makeSut = () => {
  const inMemoryPackage = new InMemoryPackageRepository();
  const inMemoryUser = new InMemoryUserRepository();
  const inMemoryInstallment = new InMemoryInstallmentRepository();
  const inMemoryInvoice = new InMemoryInvoiceRepository();

  const sut = new CreateInvoice(
    inMemoryInvoice,
    inMemoryInstallment,
    inMemoryPackage,
    inMemoryUser,
  );

  return {
    sut,
    inMemoryInstallment,
    inMemoryInvoice,
    inMemoryPackage,
    inMemoryUser,
  };
};

describe('Create Invoice Use Case', () => {
  it('should be possible create a invoice', async () => {
    const { sut } = makeSut();
  });
});
