import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';

import { PasswordHasherServiceInterface } from '../utils/password-hasher.service.interface';
import { User } from '../entity/user.entity';
import { Repository } from 'typeorm';
import { UserCreateDto } from "../dto/user-create.dto";

@Injectable()
export class CreateUserService{
  constructor(
    //@InjectRepository(User)
    //private readonly userRepository: Repository<User>,
    private readonly passwordHasherService: PasswordHasherServiceInterface,
  ) {
  }

  async createUser(data: UserCreateDto) {
    const userToPersist = {
      ...data,
      password: await this.passwordHasherService.hashPassword(data.password),
    };

    try{
      console.log(userToPersist)
      //return this.userRepository.save(userToPersist);
    } catch (error) {
      console.log(error);
      throw new Error('Error while creating user');
    }
  }
}