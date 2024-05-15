import { Delete, Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { CreateUserService } from "./usecase/create-user.service";
import { UserController } from "./controller/user.controller";
import { PasswordHasherService } from "./utils/password-hasher.service";


@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [CreateUserService,PasswordHasherService],
})
export class UserModule {}
