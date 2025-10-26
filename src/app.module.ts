import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ClientAuthModule } from './client/auth/client.auth.module';
import { ClientModule } from './client/get/client.module';
import { PrismaModule } from './prisma/prisma.module';
import { BusinessAuthModule } from './shop/auth/business.auth.module';
import { BusinessModule } from './shop/get/business.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ClientAuthModule,
    BusinessAuthModule,
    BusinessModule  ,
    ClientModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
