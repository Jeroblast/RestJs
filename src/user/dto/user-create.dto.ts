import { IsNumber, IsString, MinLength } from "class-validator";

export class UserCreateDto {

  @IsString()
  username: string;

  @IsString()
  firstname: string;

  @IsString()
  lastname: string;

  @IsString()
  password: string;

  @IsNumber()
  age: number;
}
