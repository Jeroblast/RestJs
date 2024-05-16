import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CreateOrderDto } from "../dto/create-order.dto";

@Entity()
export class Orders {

  constructor(createOrderData?: CreateOrderDto) {

    if (createOrderData) {
      if (createOrderData.items.length > 3) {
        throw new Error("trop d'items");
      }

      this.items = createOrderData.items;
      this.creatdAt = new Date();
      this.updatedAt = new Date();
      this.custommers = "PepaPig";
      this.status = "cart";
      this.paidAt = null;
      this.total = 10 * createOrderData.items.length;
    }


  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  creatdAt: Date;

  @Column({ type: "varchar" })
  updatedAt: Date;


  @Column({ type: "varchar" ,nullable: true })
  paidAt: string;

  @Column({ type: "varchar" })
  status: string;

  @Column({ type: "varchar" })
  custommers: string;

  @Column({ type: "json" })
  items: string[];

  @Column({ type: "int" })
  total: number;


}
