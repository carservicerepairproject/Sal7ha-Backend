import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './user.auth.service';
import { UserSignInDto } from '../dto';
import { UserSignUpDto } from '../dto/user-signup-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signUp(@Body() dto: UserSignUpDto) {
    return this.authService.signUp(dto);
  }

  @Post('signin')
  signIn(@Body() dto: UserSignInDto) {
    return this.authService.signIn(dto);
  }
}
