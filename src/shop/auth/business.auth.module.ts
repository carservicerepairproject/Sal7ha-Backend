import { Module } from '@nestjs/common';
import { BusinessAuthController } from './business.auth.controller';
import { BusinessAuthService } from './business.auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule.register({})],
  controllers: [BusinessAuthController],
  providers: [BusinessAuthService],
})
export class BusinessAuthModule {}
