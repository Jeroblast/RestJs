import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Orders } from "../entity/orders.entity";


Injectable();
export class GetAllOrdersService {
  constructor(
    // on "injecte" le repository de l'entité Order
    // dans la propriété articleRepository de la classe orderservice
    // pour pouvoir ensuite utiliser les méthodes du repository
    // dans les méthodes de notre service
    @InjectRepository(Orders)
    private readonly orderRepository: Repository<Orders>,
  ) {}

  async getAllOrders() {
    return await this.orderRepository.find();
  }
}
