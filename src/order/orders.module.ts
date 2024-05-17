import {  Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrderController } from "./controller/order.controller";
import { Orders } from "./entity/orders.entity";
import { CreateOrderService } from "./usecase/create-orders.service";
import { GetAllOrdersService } from "./usecase/get-all-orders.service";
import { UpdateOrderPaidAtService } from "./usecase/update-order-paidat.service";
import { UpdateOrderAddressService } from "./usecase/update-order-address.service";
import { UpdateOrderInvoiceAddressService } from "./usecase/update-order-invoice-address.service";
import { OrderItems } from "./entity/order-item.entity";



@Module({
  imports: [TypeOrmModule.forFeature([Orders,OrderItems])],
  controllers: [OrderController],
  providers: [CreateOrderService,
    GetAllOrdersService,
    UpdateOrderPaidAtService,
    UpdateOrderAddressService,
    UpdateOrderInvoiceAddressService

  ],
})

export class OrderModule {
}
