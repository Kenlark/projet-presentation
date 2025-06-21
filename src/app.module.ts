import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import AvailabilityModule from './modules/availability/availability.module';
import MatchingModule from './modules/matching/matching.module';
import UserModule from './modules/user/user.module';

import { BotModule } from './bot/bot.module';
import { TestController } from './test.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true,
    }),
    BotModule,
    AvailabilityModule,
    MatchingModule,
    UserModule,
  ],
  controllers: [TestController],
})
export class AppModule {}
