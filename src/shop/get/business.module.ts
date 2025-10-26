import { BusinessJwtStrategy } from '../strategy';
import { BusinessController } from './business.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [BusinessController],
  providers: [BusinessJwtStrategy],
})
export class BusinessModule {}
