import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CreateOrderDto } from "../dto/create-order.dto";
import { OrderShippingUpdateDto } from "../dto/update-order-shipping.dto";
import { OrderInvoiceUpdateDto } from "../dto/update-order-invoice.dto";

@Entity()
export class Orders {

  static CartStatus = {
    cart: "cart",
    paid: "paid",
    ShippingAddressSet: "ShippingAddressSet",
    InvoiceAddressSet: "InvoiceAddressSet",
  }

  constructor(createOrderData?: CreateOrderDto) {

    if (createOrderData) {
      if (createOrderData.items.length > 3) {
        throw new Error("trop d'items");
      }

      this.items = createOrderData.items;
      this.creatdAt = new Date();
      this.updatedAt = new Date();
      this.custommers = "PepaPig";
      this.status = Orders.CartStatus.cart
      this.paidAt = null;
      this.total = 10 * createOrderData.items.length;
      this.shipping_address = null;
      this.shipping_method = null;
      this.invoice_address = null;
      this.shipping_method_setAt = new Date();
      this.invoice_address_setAt = new Date();
    }


  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  creatdAt: Date;

  @Column({ type: "varchar" })
  updatedAt: Date;

  @Column({ type: "varchar" ,nullable: true })
  paidAt: Date;

  @Column({ type: "varchar" })
  status: string;

  @Column({ type: "varchar" })
  custommers: string;

  @Column({ type: "json" })
  items: string[];

  @Column({ type: "int" })
  total: number;

  pay() {
    this.updatedAt = new Date();
    this.paidAt = new Date();
    this.status = "paid";
  }

  @Column({ type: "varchar",nullable: true })
  shipping_address: string;

  @Column({ type: "varchar", nullable: true })
  shipping_method: string;

  @Column({ type: "varchar",nullable: true })
  invoice_address: string;

  @Column({ type: "varchar", nullable: true })
  shipping_method_setAt: Date;

  @Column({ type: "varchar", nullable: true })
  invoice_address_setAt: Date;

 updateShippingAddress(orderShippingUpdateDto: OrderShippingUpdateDto) {
   if(this.status === "cart"){
     this.status = "ShippingAddressSet";
     this.shipping_address = orderShippingUpdateDto.shipping_address;
     this.shipping_method = orderShippingUpdateDto.shipping_method;
     this.shipping_method_setAt = new Date();
     this.updatedAt = new Date();

   }
 }

 updateInvoiceAddress(orderInvoiceUpdateDto: OrderInvoiceUpdateDto) {
   if (this.status !== "ShippingAddressSet") {
     throw new Error("shipping address not set");
   }

     this.status = "InvoiceAddressSet";
     this.invoice_address = orderInvoiceUpdateDto.invoice_address;
     this.invoice_address_setAt = new Date();
     this.updatedAt = new Date();

 }



}
