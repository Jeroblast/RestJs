import { IsString } from "class-validator";
import { Column } from "typeorm";

export class OrderShippingUpdateDto {
  @IsString()
  shipping_address: string;
  @IsString()
  shipping_method: string;

}
