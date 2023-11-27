import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from 'src/domain/dto';
import { CreateUserUseCase } from 'src/domain/use-cases';

@Controller('/user')
export class CreateUserController {
  constructor(private createUser: CreateUserUseCase) {}

  @Post('/')
  async handle(@Body() createUserDTO: CreateUserDTO) {
    return this.createUser.execute(createUserDTO);
  }
}
