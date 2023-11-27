import { CreateUserDTO } from 'src/domain/dto';

export abstract class UserRepository {
  abstract save(createUserDTO: CreateUserDTO): Promise<void>;
}
