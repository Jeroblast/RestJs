import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from "../entity/user.entity";


Injectable();
export class GetUserByCityService {
  constructor(
    // on "injecte" le repository de l'entité Article
    // dans la propriété articleRepository de la classe ArticleService
    // pour pouvoir ensuite utiliser les méthodes du repository
    // dans les méthodes de notre service
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}


  //C'est une méthode asynchrone
  //Await permettre d'attendre le processus de la requête
  //Find permet de chercher les données de la base de données avec le filtre birthcity

  async getUserByCity(birthcity: string) {
    return await this.userRepository.find({ where: { birthcity } });
  }

}
