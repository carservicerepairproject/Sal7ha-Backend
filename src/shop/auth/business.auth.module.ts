import { Module } from '@nestjs/common';
import { BusinessAuthController } from './business.auth.controller';
import { BusinessAuthService } from './business.auth.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { BusinessJwtStrategy } from '../strategy/business-jwt.strategy';

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: (config: ConfigService) => ({
        secret: config.get('JWT_SECRET'),
        signOptions: { expiresIn: '15m' },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [BusinessAuthController],
  providers: [BusinessAuthService, BusinessJwtStrategy],
})
export class BusinessAuthModule {}
