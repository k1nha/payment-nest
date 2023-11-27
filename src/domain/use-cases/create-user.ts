import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user';
import { UseCase } from 'src/core/base';
import bcrypt from 'bcrypt';

type Input = {
  name: string;
  email: string;
  password: string;
  avatar?: string;
};

type Output = {
  message: string;
};

@Injectable()
export class CreateUserUseCase implements UseCase<Input, Output> {
  constructor(private userRepository: UserRepository) {}

  async execute(input: Input): Promise<Output> {
    const hash_password = await bcrypt.hash(input.password, 8);

    await this.userRepository.save({
      password: hash_password,
      ...input,
    });

    return {
      message: 'oi',
    };
  }
}
