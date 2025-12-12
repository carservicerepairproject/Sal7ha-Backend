import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BusinessJwtStrategy extends PassportStrategy(
  Strategy,
  'business-jwt',
) {
  constructor(
    private config: ConfigService,
    private prisma: PrismaService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get('JWT_SECRET'),
    });
  }

  async validate(payload: { sub: number; email: string }) {
    const business = await this.prisma.business.findUnique({
      where: {
        id: payload.sub,
      },
    });

    if (!business) {
      throw new Error('Business Not Found');
    }

    const { hash, ...businessWithoutHash } = business;

    return businessWithoutHash;
  }
}
