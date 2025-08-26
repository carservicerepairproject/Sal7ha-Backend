import { Controller, Get, UseGuards } from '@nestjs/common';
import type { Shop } from '@prisma/client';
import { GetUser } from 'src/auth/user/decorator';
import { ShopJwtGuard } from '../guard/shop-jwt.guard';

@UseGuards(ShopJwtGuard)
@Controller('shops')
export class ShopController {
  @Get('me')
  getMe(@GetUser() shop: Shop) {
    return shop;
  }
}
