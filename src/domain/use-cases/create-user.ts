import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user';
import { UseCase } from 'src/core/base';
import * as bcrypt from 'bcrypt';

type Input = {
  name: string;
  email: string;
  password: string;
  avatar: string | null;
};

@Injectable()
export class CreateUserUseCase implements UseCase<Input, void> {
  constructor(private userRepository: UserRepository) {}

  async execute(input: Input): Promise<void> {
    const emailExists = await this.userRepository.findByEmail(input.email);

    if (emailExists) {
      throw new HttpException(
        'Email address already exists',
        HttpStatus.BAD_REQUEST,
      );
    }

    const hash_password = await bcrypt.hash(input.password, 8);

    await this.userRepository.save({
      password: hash_password,
      ...input,
    });
  }
}
