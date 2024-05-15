import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserService } from "../usecase/create-user.service";
import { UserCreateDto } from "../dto/user-create.dto";


@Controller('user')
export class UserController {
  // injection de dépendance
  // permet d'instancier la classe UserService
  // dans la propriété userService
  constructor(
    private readonly createUserService: CreateUserService) {

    }

  @Post()
  // on utilise le décorateur @Body pour récupérer
  // les données du body de la requête
  // on valide les données du body de la requête
  // avec un DTO (Data Transfer Object)

  createUser(@Body() data: UserCreateDto) {
    return this.createUserService.createUser(data);
  }

}
