import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserRepository } from 'src/domain/repositories/user';
import { CreateUserDTO } from 'src/domain/dto';
import { UserEntity } from 'src/domain/entities';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async findByEmail(email: string): Promise<UserEntity | null> {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) return null;

    return user;
  }

  async save(createUserDTO: CreateUserDTO): Promise<void> {
    await this.prisma.user.create({
      data: createUserDTO,
    });
  }
}
