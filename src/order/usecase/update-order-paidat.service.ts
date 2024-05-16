import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Orders } from "../entity/orders.entity";



Injectable();
export class UpdateOrderPaidAtService {
  constructor(

    @InjectRepository(Orders)
    private readonly orderRepository: Repository<Orders>,
  ) {}


  async updateOrderPaid(id: number) {
    const order = await this.orderRepository.findOneById( id );
    order.pay();
    await this.orderRepository.save(order);

    return order;
  }

}
