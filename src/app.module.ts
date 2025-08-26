import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/user/auth/user.auth.module';
import { UserModule } from './auth/user/get/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ShopAuthModule } from './shop/auth/shop.auth.module';
import { ShopModule } from './shop/get/shop.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    ShopAuthModule,
    ShopModule,
    UserModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
