import { randomUUID } from 'crypto';
import { CreateUserDTO } from 'src/domain/dto';
import { UserEntity } from 'src/domain/entities';
import { UserRepository } from 'src/domain/repositories/user';

export class InMemoryUserRepository implements UserRepository {
  public items: UserEntity[] = [];

  async save(createUserDTO: CreateUserDTO): Promise<void> {
    const user = {
      id: randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date(),
      ...createUserDTO,
    };

    this.items.push(user);
  }

  async findByEmail(email: string): Promise<UserEntity | null> {
    const user = this.items.find((item) => item.email === email);

    if (!user) {
      return null;
    }

    return user;
  }
}
