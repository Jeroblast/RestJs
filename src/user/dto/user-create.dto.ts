import { MinLength } from 'class-validator';

export class UserCreateDto {
  firstname: string;
  lastname: string;
  password: string;
  age: number;
}
