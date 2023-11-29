import { HttpException } from '@nestjs/common';
import { InMemoryUserRepository } from '../../../test/repositories/in-memory-user-repository';
import { CreateUserUseCase } from './create-user';

const makeSut = () => {
  const inMemoryUserRepo = new InMemoryUserRepository();
  const sut = new CreateUserUseCase(inMemoryUserRepo);

  return {
    sut,
    inMemoryUserRepo,
  };
};

describe('Create User Use Case', () => {
  it('should create a user', async () => {
    const input = {
      avatar: null,
      name: 'Example name',
      password: '1234',
      email: 'example@email.com',
    };

    const { sut, inMemoryUserRepo } = makeSut();

    await sut.execute(input);

    expect(inMemoryUserRepo.items.length).toBe(1);
  });

  it('should return error if email already exists', async () => {
    const input1 = {
      avatar: null,
      name: 'Example name',
      password: '1234',
      email: 'example@email.com',
    };

    const input2 = {
      avatar: null,
      name: 'Another example name',
      password: '1234',
      email: 'example@email.com',
    };

    const { sut, inMemoryUserRepo } = makeSut();

    inMemoryUserRepo.save(input1);

    expect(() => sut.execute(input2)).rejects.toBeInstanceOf(HttpException);
  });
});
