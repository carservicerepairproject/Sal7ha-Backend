import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import type { User } from '@prisma/client';
import { GetUser } from 'src/auth/user/decorator';
import { UserJwtGuard } from 'src/auth/user/guard';

@UseGuards(UserJwtGuard)
@Controller('users')
export class UserController {
  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  }
}
