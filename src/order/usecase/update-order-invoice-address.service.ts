import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Orders } from "../entity/orders.entity";
import { OrderShippingUpdateDto } from "../dto/update-order-shipping.dto";
import { OrderInvoiceUpdateDto } from "../dto/update-order-invoice.dto";



Injectable();
export class UpdateOrderInvoiceAddressService {
  constructor(

    @InjectRepository(Orders)
    private readonly orderRepository: Repository<Orders>,
  ) {}


  async updateOrderInvoiceAddress(id: number,orderInvoiceUpdateDto: OrderInvoiceUpdateDto) {
    try {
      const order = await this.orderRepository.findOneById( id );

      order.updateInvoiceAddress(orderInvoiceUpdateDto);
      return await this.orderRepository.save(order);

    } catch (error) {
      throw error;
    }



  }

}
