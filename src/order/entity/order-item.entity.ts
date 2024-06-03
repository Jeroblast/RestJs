import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Orders } from "./orders.entity";

@Entity()
export class OrderItems {

  @PrimaryGeneratedColumn()
  id: number;

  product: string;

  @Column({ type: "int" })
  quantity: number;

  @Column({ type: "int" })
  price: number;

  @ManyToOne(() => Orders, (order) => order.items)
  order: Orders;

  incrementQuantity() {
    this.quantity++;
  }

  constructor(product : string) {

    this.product= product;
    this.quantity = 1;
    this.price = 10;

  }

}