import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put, UseGuards
} from "@nestjs/common";
import { GetAllOrdersService } from "../usecase/get-all-orders.service";
import { CreateOrderService } from "../usecase/create-orders.service";
import { CreateOrderDto } from "../dto/create-order.dto";
import { UpdateOrderPaidAtService } from "../usecase/update-order-paidat.service";
import { UpdateOrderAddressService } from "../usecase/update-order-address.service";
import { UserPasswordUpdateDto } from "../../user/dto/user-password.dto";
import { OrderShippingUpdateDto } from "../dto/update-order-shipping.dto";
import { OrderInvoiceUpdateDto } from "../dto/update-order-invoice.dto";
import { UpdateOrderInvoiceAddressService } from "../usecase/update-order-invoice-address.service";
import { AuthGuard } from "../../auth/auth-guard";



@Controller('order')
export class OrderController {
  // injection de dépendance
  // permet d'instancier la classe UserService
  // dans la propriété userService
  constructor(
    private readonly createOrderService: CreateOrderService,
    private readonly getAllOrdersService: GetAllOrdersService,
    private readonly updatePaidDateService: UpdateOrderPaidAtService,
    private readonly updateOrderAddressService: UpdateOrderAddressService,
    private readonly updateOrderInvoiceAddressService: UpdateOrderInvoiceAddressService

  ) {
  }

  @Get()
  @UseGuards(AuthGuard)

  getAllOrders() {
    return this.getAllOrdersService.getAllOrders();
  }

  @Post()
  @UseGuards(AuthGuard)

  // on utilise le décorateur @Body pour récupérer
  // les données du body de la requête
  // on valide les données du body de la requête
  // avec un DTO (Data Transfer Object)

  createOrder(@Body() data: CreateOrderDto) {
    console.log(data);
    return this.createOrderService.createOrder(data);
  }

  @Put(':id/pay')
  @UseGuards(AuthGuard)


  updateOrderPaid(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.updatePaidDateService.updateOrderPaid(id);
  }

  @Put('/:id/address')
  @UseGuards(AuthGuard)


  updateOrderAddress(
    @Param('id', ParseIntPipe) id: number,
    @Body() shipping: OrderShippingUpdateDto,
  ) {
    return this.updateOrderAddressService.updateOrderAddress(id,shipping);
  }

  @Put('/:id/invoiceAddress')
  @UseGuards(AuthGuard)


  updateOrderInvoiceAddress(
    @Param('id', ParseIntPipe) id: number,
    @Body() invoice: OrderInvoiceUpdateDto,
  ) {
    return this.updateOrderInvoiceAddressService.updateOrderInvoiceAddress(id,invoice);
  }


}
