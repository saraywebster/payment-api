import {
  IsNumber,
  IsBoolean,
  IsOptional,
  Min,
  Max,
  Length,
  IsString,
  IsEnum,
} from 'class-validator';
import { Column } from 'typeorm';
import { PaymentMethod } from './payment-method.enum';

export class CreatePaymentDto {
  @IsNumber(
    { allowNaN: false, allowInfinity: false },
    { message: 'Amount must be a valid number' },
  )
  @Min(0.01, { message: 'Amount must be greater than 0' })
  amount: number;

  @IsOptional()
  @Length(1, 255, {
    message: 'Description must be between 1 and 255 characters',
  })
  description: string;

  @IsString({ message: 'Payment email must be a string' })
  payment_email: string;

  @IsEnum(PaymentMethod, { message: 'Invalid payment method' })
  paymentMethod: string;
}
