import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {  Users } from "../entity/user.entity";

Injectable();
export class GetUserByIdService {
  constructor(
    // on "injecte" le repository de l'entité User
    // dans la propriété articleRepository de la classe UserService
    // pour pouvoir ensuite utiliser les méthodes du repository
    // dans les méthodes de notre service
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
  ) {}

  async getOneUserById(id: number) {
    return await this.userRepository.findOneBy({ id });
  }

}