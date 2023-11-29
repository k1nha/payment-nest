import { CreateUserDTO } from 'src/domain/dto';
import { UserEntity } from 'src/domain/entities';

export abstract class UserRepository {
  abstract save(createUserDTO: CreateUserDTO): Promise<void>;
  abstract findByEmail(email: string): Promise<UserEntity | null>;
}
