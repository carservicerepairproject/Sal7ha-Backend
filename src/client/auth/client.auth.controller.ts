import { Body, Controller, Post } from '@nestjs/common';
import { ClientAuthService } from './client.auth.service';
import { UserSignInDto } from '../dto';
import { UserSignUpDto } from '../dto/user-signup-auth.dto';

@Controller('auth')
export class ClientAuthController {
  constructor(private authService: ClientAuthService) {}

  @Post('signup')
  signUp(@Body() dto: UserSignUpDto) {
    return this.authService.signUp(dto);
  }

  @Post('signin')
  signIn(@Body() dto: UserSignInDto) {
    return this.authService.signIn(dto);
  }
}
