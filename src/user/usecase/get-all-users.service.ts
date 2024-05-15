import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from "../entity/user.entity";


Injectable();
export class GetAllUSersService {
  constructor(
    // on "injecte" le repository de l'entité User
    // dans la propriété articleRepository de la classe userService
    // pour pouvoir ensuite utiliser les méthodes du repository
    // dans les méthodes de notre service
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
  ) {}

  async getAllUsers() {
    return await this.userRepository.find();
  }
}
