import { Module } from '@nestjs/common';
import { DatabaseModule } from '../db/database.module';
import { CreateUserController } from './controller/create-user.controller';
import { CreateUserUseCase } from 'src/domain/use-cases';

@Module({
  imports: [DatabaseModule],
  controllers: [CreateUserController],
  providers: [CreateUserUseCase],
})
export class HttpModule {}
