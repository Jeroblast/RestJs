import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from "@nestjs/typeorm";
import { Users } from "../../user/entity/user.entity";
import { Repository } from "typeorm";
import * as bcrypt from 'bcrypt';


@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
    private jwtService: JwtService
  ) {}

  async login(
    username: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    const user = await this.userRepository.findOneBy({ username });

    console.log(user)

    if (!user || (!await bcrypt.compare(pass, user.password))) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}