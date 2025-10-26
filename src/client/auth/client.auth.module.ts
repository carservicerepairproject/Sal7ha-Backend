import { Module } from '@nestjs/common';
import { ClientAuthController } from './client.auth.controller';
import { ClientAuthService } from './client.auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../strategy';

@Module({
  imports: [JwtModule.register({})],
  controllers: [ClientAuthController],
  providers: [ClientAuthService, JwtStrategy],
})
export class ClientAuthModule {}
