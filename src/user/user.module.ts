import { Delete, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entity/user.entity";
import { CreateUserService } from "./usecase/create-user.service";
import { UserController } from "./controller/user.controller";
import { PasswordHasherService } from "./utils/password-hasher.service";
import { PasswordHasherServiceInterface } from "./utils/password-hasher.service.interface";
import { UpdateUserService } from "./usecase/update-user.service";
import { GetAllUSersService } from "./usecase/get-all-users.service";
import { GetUserByIdService } from "./usecase/get-user-by-id.service";
import { GetUserByCityService } from "./usecase/get-user-city.service";
import { UpdateUserPasswordService } from "./usecase/update-password-user.service";


@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [PasswordHasherService,
    CreateUserService,
    UpdateUserService,
    UpdateUserPasswordService,
    GetAllUSersService,
    GetUserByIdService,
    GetUserByCityService
    //{
   // provide: CreateUserService,
   // useFactory: (passwordHasherService: PasswordHasherServiceInterface) => {
   //   return new CreateUserService(passwordHasherService);
  //  },
 //   inject: [PasswordHasherService],
 // },

],
})

export class UserModule {
}
