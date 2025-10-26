import { Body, Controller, Post } from '@nestjs/common';

import { BusinessAuthService } from './business.auth.service';
import { BusinessSignUpDto } from '../dto';
import { BusinessSignInDto } from '../dto/business-signin.auth.dto';

@Controller('/auth/shop')
export class BusinessAuthController {
  constructor(private shopAuthService: BusinessAuthService) {}
  @Post('signup')
  signUp(@Body() dto: BusinessSignUpDto) {
    return this.shopAuthService.signUp(dto);
  }

  @Post('signin')
  signIn(@Body() dto: BusinessSignInDto) {
    return this.shopAuthService.signIn(dto);
  }
}
