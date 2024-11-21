import { IsNumber, IsString, Length } from 'class-validator';

export class UpdatePaymentDto {
  @IsNumber(
    { allowNaN: false, allowInfinity: false },
    { message: 'Amount must be a valid number' },
  )
  amount?: number;

  @IsString({ message: 'Description must be a string' })
  @Length(1, 255, { message: 'Description must be a string' })
  description?: string;
}
