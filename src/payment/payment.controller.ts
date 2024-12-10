import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { PaymentService } from './payment.service';

import { CreatePaymentDto } from './createPayment.dto';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Get(':id')
  async getPaymetById(@Param('id') id: number) {
    const payment = await this.paymentService.findOneById(id);
    if (!payment) {
      throw new HttpException(
        `Payment with ID ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }

    return payment;
  }

  @Post()
  async createPayments(@Body() createPaymentDto: CreatePaymentDto) {
    return this.paymentService.create(createPaymentDto);
  }

  // @Patch(':id')
  // @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  // async updatePayment(
  //   @Param('id') id: number,
  //   @Body() updatePaymentDto: UpdatePaymentDto,
  // ) {
  //   const updatedPayment = await this.paymentService.updatePartial(
  //     id,
  //     updatePaymentDto,
  //   );

  //   if (!updatedPayment) {
  //     throw new NotFoundException(`Payment with ${id} not found`);
  //   }

  //   return updatedPayment;
  // }
}
