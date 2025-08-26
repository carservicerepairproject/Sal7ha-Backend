import { Body, Controller, Post } from '@nestjs/common';

import { ShopAuthService } from './shop.auth.service';
import { ShopSignUpDto } from '../dto';
import { ShopSignInDto } from '../dto/shop-signin.auth.dto';

@Controller('/auth/shop')
export class ShopAuthController {
  constructor(private shopAuthService: ShopAuthService) {}
  @Post('signup')
  signUp(@Body() dto: ShopSignUpDto) {
    return this.shopAuthService.signUp(dto);
  }

  @Post('signin')
  signIn(@Body() dto: ShopSignInDto) {
    return this.shopAuthService.signIn(dto);
  }
}
