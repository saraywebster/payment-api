import {
  IsNumber,
  IsBoolean,
  IsOptional,
  Min,
  Max,
  Length,
} from 'class-validator';

export class CreatePaymentDto {
  @IsNumber(
    { allowNaN: false, allowInfinity: false },
    { message: 'Amount must be a valid number' },
  )
  @Min(0.01, { message: 'Amount must be greater than 0' })
  @Max(1000000, { message: 'Amount must be less than or equal to 1,000,000' })
  amount: number;

  @Length(1, 255, {
    message: 'Description must be between 1 and 255 characters',
  })
  description: string;

  @IsBoolean({ message: 'Confirmed must be a boolean value (true or false)' })
  @IsOptional()
  confirmed?: boolean;
}
