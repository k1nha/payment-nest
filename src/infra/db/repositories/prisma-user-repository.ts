import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserRepository } from 'src/domain/repositories/user';
import { CreateUserDTO } from 'src/domain/dto';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async save(createUserDTO: CreateUserDTO): Promise<void> {
    await this.prisma.user.create({
      data: createUserDTO,
    });
  }
}
