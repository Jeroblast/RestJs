import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from '../entity/article.entity';
import { ArticleUpdateDto } from '../dto/article-update.dto';
import { ArticleCreateDto } from '../dto/article-create.dto';

Injectable();
export class GetArticleByAuthorService {
  constructor(
    // on "injecte" le repository de l'entité Article
    // dans la propriété articleRepository de la classe ArticleService
    // pour pouvoir ensuite utiliser les méthodes du repository
    // dans les méthodes de notre service
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
  ) {}


  //C'est une méthode asynchrone
  //Await permettre d'attendre le processus de la requête
  //Find permet de chercher les données de la base de données avec le filtre author

  async getArticlesByAuthor(author: string) {
    return await this.articleRepository.find({ where: { author } });
  }



}
