import * as bcrypt from 'bcrypt';
import { Injectable } from "@nestjs/common";

Injectable();
export class PasswordHasherService {

  async hashPassword(password: string): Promise<string> {
    const saltOrRounds = 10;
    return await bcrypt.hash(password, saltOrRounds);
  }
}

