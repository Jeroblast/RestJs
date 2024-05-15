import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from "../entity/user.entity";
import { UserUpdateDto } from "../dto/user-update.dto";


Injectable();
export class UpdateUserService {
  constructor(
    // on "injecte" le repository de l'entité User
    // dans la propriété articleRepository de la classe UserService
    // pour pouvoir ensuite utiliser les méthodes du repository
    // dans les méthodes de notre service
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}


  async updateUser(id: number, data: UserUpdateDto) {
    // on récupère le user ciblé
    const user = await this.userRepository.findOneBy({ id });
    // on "merge" les données du body de la requête
    // avec les données déjà présentes dans le user
    const userUpdate = { ...User, ...data };
    // on sauvegarde le user mis à jour
    await this.userRepository.save(userUpdate);

    return userUpdate;
  }

}
