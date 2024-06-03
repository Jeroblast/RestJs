import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users } from "../user/entity/user.entity";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./auth-constants";
import { LoginService } from "./usecase/login.service";
import { AuthController } from "./controller/auth.controller";


@Module({
  imports: [
    TypeOrmModule.forFeature([Users]),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: "60s" }
    }),
  ],
  providers: [LoginService],
  controllers: [AuthController],
  exports: [LoginService]
})
export class LoginModule {
}
