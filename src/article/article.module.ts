import { Delete, Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './entity/article.entity';
import { ArticleController } from './controller/article.controller';
import { CreateArticleService } from "./service/create-article.service";
import { DeleteArticleService } from "./service/delete-article.service";
import { GetAllArticleService } from "./service/get-articles.service";
import { GetArticleByAuthorService } from "./service/get-article-by-author.service";
import { UpdateArticleService } from "./service/update-article.service";
import { GetArticleByIdService } from "./service/get-articles-by-id.service";

@Module({
  imports: [TypeOrmModule.forFeature([Article])],
  controllers: [ArticleController],
  providers: [CreateArticleService,DeleteArticleService,GetAllArticleService,GetArticleByAuthorService,GetArticleByIdService,UpdateArticleService],
})
export class ArticleModule {}
