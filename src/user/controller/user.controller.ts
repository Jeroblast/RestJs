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
import { ArticleUpdateDto } from "../../article/dto/article-update.dto";
import { UserUpdateDto } from "../dto/user-update.dto";
import { UpdateUserService } from "../usecase/update-user.service";
import { GetAllUSersService } from "../usecase/get-all-users.service";
import { GetArticleByIdService } from "../../article/service/get-articles-by-id.service";
import { GetUserByIdService } from "../usecase/get-user-by-id.service";
import { GetUserByCityService } from "../usecase/get-user-city.service";
import { UpdateUserPasswordService } from "../usecase/update-password-user.service";
import { UserPasswordUpdateDto } from "../dto/user-password.dto";


@Controller('user')
export class UserController {
  // injection de dépendance
  // permet d'instancier la classe UserService
  // dans la propriété userService
  constructor(
    private readonly createUserService: CreateUserService,
    private readonly updateUserService: UpdateUserService,
    private readonly updateUserPasswordService: UpdateUserPasswordService, // injection de dépendance par constructeur
    private readonly getAllUsersService: GetAllUSersService,
    private readonly getUserByIdService: GetUserByIdService,
    private readonly getUserByCityService: GetUserByCityService,
    ) {
    }

  @Get()
  getAllUsers() {
    return this.getAllUsersService.getAllUsers();
  }
  @Get('birthcity/:birthcity')
  getArticlesByAuthor(@Param('city') birthcity: string) {
    return this.getUserByCityService.getUserByCity(birthcity);
  }

  // on peut passer en parametre du décorateur
  // un segment d'url avec éventuellement des paramètres
  // on peut ensuite récupérer sa valeur avec le décorateur @Param
  @Get(':id')
  getOneUserById(@Param('id', ParseIntPipe) id: number) {
    return this.getUserByIdService.getOneUserById(id);
  }
  @Post()
  // on utilise le décorateur @Body pour récupérer
  // les données du body de la requête
  // on valide les données du body de la requête
  // avec un DTO (Data Transfer Object)

  createUser(@Body() data: UserCreateDto) {
    console.log(data);
    return this.createUserService.createUser(data);
  }

  @Put(':id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UserUpdateDto,
  ) {
    return this.updateUserService.updateUser(id, data);
  }
  @Put(':id/password')

  updateUserPassword(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UserPasswordUpdateDto,
  ) {
    return this.updateUserPasswordService.updateUserPassword(id, data);
  }


}
