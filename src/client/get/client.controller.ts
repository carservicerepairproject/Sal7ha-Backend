import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import type { User } from '@prisma/client';
import { GetUser } from '../decorator';
import { ClientJwtGuard } from '../guard';

@UseGuards(ClientJwtGuard)
@Controller('clients')
export class ClientController {
  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  }
}
