import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CreateOrderDto } from "../dto/create-order.dto";
import { Orders } from "./orders.entity";

@Entity()
export class OrderItems {

  @PrimaryGeneratedColumn()
  id: number;

  product: string;

  @Column({ type: "int" })
  quantity: number;

  @Column({ type: "int"})
  price: number;

  @ManyToOne(() => Orders, (order) => order.items)
  order: Orders;
}