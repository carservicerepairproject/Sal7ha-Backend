import { ShopJwtStrategy } from '../strategy';
import { ShopController } from './shop.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [ShopController],
  providers: [ShopJwtStrategy],
})
export class ShopModule {}
