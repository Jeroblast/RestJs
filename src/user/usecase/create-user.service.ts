import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';

import { PasswordHasherServiceInterface } from '../utils/password-hasher.service.interface';
import { Users } from '../entity/user.entity';
import { Repository } from 'typeorm';
import { UserCreateDto } from "../dto/user-create.dto";
import { PasswordHasherService } from "../utils/password-hasher.service";

@Injectable()
export class CreateUserService{
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
   private readonly passwordHasherService: PasswordHasherService,
  ) {
  }

  async createUser(data: UserCreateDto) {
    const userToPersist = {
      ...data,
      password: await this.passwordHasherService.hashPassword(data.password),
    };

    try{

      return this.userRepository.save(userToPersist);
    } catch (error) {
      throw new Error('Error while creating user');
    }
  }
}