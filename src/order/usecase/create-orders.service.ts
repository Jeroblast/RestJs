import { CreateOrderDto } from "../dto/create-order.dto";
import { Repository } from "typeorm";
import { Orders } from "../entity/orders.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Users } from "../../user/entity/user.entity";

export class CreateOrderService {

  constructor(
    @InjectRepository(Orders)
    private readonly orderRepository: Repository<Orders>) {
  }

  async createOrder(createOrderData: CreateOrderDto): Promise<Orders> {
    {
      const order = new Orders(createOrderData);

      return await this.orderRepository.save(order);
    }
  }
}