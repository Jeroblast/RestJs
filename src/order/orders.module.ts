import { Delete, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrderController } from "./controller/order.controller";
import { Orders } from "./entity/orders.entity";
import { CreateOrderService } from "./usecase/create-orders.service";
import { GetAllOrdersService } from "./usecase/get-all-orders.service";



@Module({
  imports: [TypeOrmModule.forFeature([Orders])],
  controllers: [OrderController],
  providers: [CreateOrderService,GetAllOrdersService

  ],
})

export class OrderModule {
}
