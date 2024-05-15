import * as bcrypt from 'bcrypt';
import { Injectable } from "@nestjs/common";
import { PasswordHasherServiceInterface } from "./password-hasher.service.interface";

Injectable();
export class PasswordHasherService implements  PasswordHasherServiceInterface{

  async hashPassword(password: string): Promise<string> {
    const saltOrRounds = 10;
    return await bcrypt.hash(password, saltOrRounds);
  }
}

