import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from "../entity/user.entity";
import { UserUpdateDto } from "../dto/user-update.dto";
import { UserPasswordUpdateDto } from "../dto/user-password.dto";
import { PasswordHasherService } from "../utils/password-hasher.service";


Injectable();
export class UpdateUserPasswordService {
  constructor(
    // on "injecte" le repository de l'entité User
    // dans la propriété articleRepository de la classe UserService
    // pour pouvoir ensuite utiliser les méthodes du repository
    // dans les méthodes de notre service
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
    private readonly passwordHasher: PasswordHasherService
  ) {}


  async updateUserPassword(id: number, data: UserPasswordUpdateDto) {
    // on récupère le user ciblé
    const user = await this.userRepository.findOneById( id );
    const newPassword =  await this.passwordHasher.hashPassword(data.password);
    // on "merge" les données du body de la requête
    // avec les données déjà présentes dans le user
    const userPasswordUpdate = { ...user, password: newPassword };
    // on sauvegarde le user mis à jour
    await this.userRepository.save(userPasswordUpdate);

    return userPasswordUpdate;
  }

}
