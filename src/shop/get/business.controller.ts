import { Controller, Get, UseGuards } from '@nestjs/common';
import type { Business } from '@prisma/client';
import { GetBusiness } from '../decorator/get-business.decorator';
import { BusinessJwtGuard } from '../guard/business-jwt.guard';

@UseGuards(BusinessJwtGuard)
@Controller('businesses')
export class BusinessController {
  @Get('me')
  getMe(@GetBusiness() business: Business) {
    return business;
  }
}
