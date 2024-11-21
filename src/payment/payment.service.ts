import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { retry } from 'rxjs';
import { Payment } from './Payment.entity';
import { Repository } from 'typeorm';
import { CreatePaymentDto } from './createPayment.dto';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private paymentRepository: Repository<Payment>,
  ) {}

  async findOneById(id: number): Promise<Payment> {
    return await this.paymentRepository.findOne({ where: { id } });
  }

  async create(createPaymentDto: CreatePaymentDto) {
    const newPayment = this.paymentRepository.create(createPaymentDto);
    return await this.paymentRepository.save(newPayment);
  }
  async updatePartial(id: number, updateData: Partial<Payment>) {
    const payment = await this.paymentRepository.findOne({ where: { id } });

    if (!payment) {
      return null;
    }

    Object.assign(payment, updateData);
    return this.paymentRepository.save(payment);
  }
}
