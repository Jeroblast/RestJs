import { IsArray } from "class-validator";

export class CreateOrderDto {
  @IsArray()
items: string[];
}
