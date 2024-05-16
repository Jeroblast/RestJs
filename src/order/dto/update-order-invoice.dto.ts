import { IsString } from "class-validator";
import { Column } from "typeorm";

export class OrderInvoiceUpdateDto {
  @IsString()
  invoice_address: string;


}
