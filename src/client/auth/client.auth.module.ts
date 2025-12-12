import { Module } from '@nestjs/common';
import { ClientAuthController } from './client.auth.controller';
import { ClientAuthService } from './client.auth.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JwtStrategy } from '../strategy';

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
  controllers: [ClientAuthController],
  providers: [ClientAuthService, JwtStrategy],
})
export class ClientAuthModule {}
