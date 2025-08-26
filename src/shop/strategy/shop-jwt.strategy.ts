import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ShopJwtStrategy extends PassportStrategy(Strategy, 'shop-jwt') {
  constructor(
    config: ConfigService,
    private prisma: PrismaService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get('JWT_SECRET'),
    });
  }

  async validate(payload: { sub: number; email: string }) {
    const shop = await this.prisma.shop.findUnique({
      where: {
        id: payload.sub,
      },
    });

    if (!shop) {
      throw new Error('Shop Not Found');
    }

    const { hash, ...shopWithoutHash } = shop;

    return shopWithoutHash;
  }
}
