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
import { GetAllOrdersService } from "../usecase/get-all-orders.service";
import { CreateArticleService } from "../../article/service/create-article.service";
import { CreateOrderService } from "../usecase/create-orders.service";
import { CreateOrderDto } from "../dto/create-order.dto";



@Controller('order')
export class OrderController {
  // injection de dépendance
  // permet d'instancier la classe UserService
  // dans la propriété userService
  constructor(
    private readonly createOrderService: CreateOrderService,
    private readonly getAllOrdersService: GetAllOrdersService,

  ) {
  }

  @Get()
  getAllOrders() {
    return this.getAllOrdersService.getAllOrders();
  }

  @Post()
  // on utilise le décorateur @Body pour récupérer
  // les données du body de la requête
  // on valide les données du body de la requête
  // avec un DTO (Data Transfer Object)

  createOrder(@Body() data: CreateOrderDto) {
    console.log(data);
    return this.createOrderService.createOrder(data);
  }


}
