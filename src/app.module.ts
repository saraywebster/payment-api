import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentModule } from './payment/payment.module';
import { Payment } from './payment/Payment.entity';
import { Transaction } from 'typeorm';

@Module({
  imports: [
    //   // ConfigModule.forRoot({ isGlobal: true }),
    //   // TypeOrmModule.forRoot({
    //   //   type: process.env.DB_TYPE as any,
    //   //   host: process.env.DB_HOST,
    //   //   port: +process.env.DB_PORT,
    //   //   username: process.env.DB_USER,
    //   //   password: process.env.DB_PASSWORD,
    //   //   database: process.env.DB_NAME,
    //   //   autoLoadEntities: true,
    //   //   synchronize: true,
    //   }),

    PaymentModule,
  ],
})
export class AppModule {}
