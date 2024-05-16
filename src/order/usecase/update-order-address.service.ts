import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Orders } from "../entity/orders.entity";
import { OrderShippingUpdateDto } from "../dto/update-order-shipping.dto";



Injectable();
export class UpdateOrderAddressService {
  constructor(

    @InjectRepository(Orders)
    private readonly orderRepository: Repository<Orders>,
  ) {}


  async updateOrderAddress(id: number,orderShippingUpdateDto: OrderShippingUpdateDto) {
    const order = await this.orderRepository.findOneById( id );
    order.updateShippingAddress(orderShippingUpdateDto);
    return await this.orderRepository.save(order);


  }

}
