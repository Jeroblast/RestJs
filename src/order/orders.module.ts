import { Delete, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrderController } from "./controller/order.controller";
import { Orders } from "./Entity/orders.entity";
import { CreateOrderService } from "./uecase/create-orders.service";
import { GetAllOrdersService } from "./uecase/get-all-orders.service";



@Module({
  imports: [TypeOrmModule.forFeature([Orders])],
  controllers: [OrderController],
  providers: [CreateOrderService,GetAllOrdersService

  ],
})

export class OrderModule {
}
