import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ArticleCreateDto } from '../dto/article-create.dto';
import { ArticleUpdateDto } from '../dto/article-update.dto';
import { GetArticleByIdService } from "../service/get-articles-by-id.service";
import { UpdateArticleService } from "../service/update-article.service";
import { DeleteArticleService } from "../service/delete-article.service";
import { GetArticleByAuthorService } from "../service/get-article-by-author.service";
import { CreateArticleService } from "../service/create-article.service";
import { GetAllArticleService } from "../service/get-articles.service";

// @Controller('articles')
// est un décorateur qui permet de déclarer un controller


// donc une classe qui va contenir des routes (url accessible)
@Controller('articles')
export class ArticleController {
  // injection de dépendance
  // permet d'instancier la classe ArticleService
  // dans la propriété articleService
  constructor(
              private readonly getArticleByIdService: GetArticleByIdService,
              private readonly updateArticleService: UpdateArticleService,
              private readonly deleteArticleService: DeleteArticleService,
              private readonly getArticleByAuthorService: GetArticleByAuthorService,
              private readonly createArticleService: CreateArticleService,
              private readonly GetAllArticleService: GetAllArticleService ) {}

  // @Get() est un décorateur qui permet de déclarer
  // une route accessible avec la méthode GET
  @Get()
  getAllArticles() {
    return this.GetAllArticleService.getAllarticles();
  }
// @Get('author/:author') permet de déclarer une route qui va contenir un paramètre autheur
  @Get('author/:author')
  getArticlesByAuthor(@Param('author') author: string) {
    return this.getArticleByAuthorService.getArticlesByAuthor(author);
  }

  // on peut passer en parametre du décorateur
  // un segment d'url avec éventuellement des paramètres
  // on peut ensuite récupérer sa valeur avec le décorateur @Param
  @Get(':id')
  getOneArticleById(@Param('id', ParseIntPipe) id: number) {
    return this.getArticleByIdService.getOneArticleById(id);
  }
  @Post()
  // on utilise le décorateur @Body pour récupérer
  // les données du body de la requête
  // on valide les données du body de la requête
  // avec un DTO (Data Transfer Object)
  createArticle(@Body() data: ArticleCreateDto) {
    return this.createArticleService.createArticle(data);
  }

  @Put(':id')
  updateArticle(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: ArticleUpdateDto,
  ) {
    return this.updateArticleService.updateArticle(id, data);
  }

  @Delete(':id')
  deleteArticle(@Param('id', ParseIntPipe) id: number) {
    return this.deleteArticleService.deleteArticle(id);
  }
}
