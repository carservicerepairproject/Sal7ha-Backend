import { Module } from '@nestjs/common';
import { ShopAuthController } from './shop.auth.controller';
import { ShopAuthService } from './shop.auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule.register({})],
  controllers: [ShopAuthController],
  providers: [ShopAuthService],
})
export class ShopAuthModule {}
