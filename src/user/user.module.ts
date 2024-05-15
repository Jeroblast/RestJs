import { Delete, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entity/user.entity";
import { CreateUserService } from "./usecase/create-user.service";
import { UserController } from "./controller/user.controller";
import { PasswordHasherService } from "./utils/password-hasher.service";
import { PasswordHasherServiceInterface } from "./utils/password-hasher.service.interface";


@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [PasswordHasherService,
    {
    provide: CreateUserService,
    useFactory: (passwordHasherService: PasswordHasherServiceInterface) => {
      return new CreateUserService(passwordHasherService);
    },
    inject: [PasswordHasherService],
  },

],
})

export class UserModule {
}
