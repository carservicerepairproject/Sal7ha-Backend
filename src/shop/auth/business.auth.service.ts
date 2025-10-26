import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { error } from 'console';
import { BusinessSignUpDto } from '../dto';
import { BusinessSignInDto } from '../dto/business-signin.auth.dto';

@Injectable()
export class BusinessAuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async signUp(dto: BusinessSignUpDto) {
    const hash = await argon.hash(dto.password);
    try {
      const shop = await this.prisma.business.create({
        data: {
          email: dto.email,
          hash: hash,
          name: dto.name,
          phoneNumber: dto.phoneNumber,
          country: dto.country,
          city: dto.city,
          commercialRegistraionNumber: dto.commercialRegistraionNumber,
          taxIdentificationNumber: dto.taxIdentificationNumber,
        },
      });
      return this.signToken(shop.id, shop.email);
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials Taken');
        }
      }
      throw error;
    }
  }

  async signIn(dto: BusinessSignInDto) {
    const shop = await this.prisma.business.findUnique({
      where: {
        email: dto.email,
      },
    });
    if (!shop) throw new ForbiddenException('Credentials Incorrect');
    const pwMatches = await argon.verify(shop.hash, dto.password);
    if (!pwMatches) throw new ForbiddenException('Credentials Incorrect');

    return this.signToken(shop.id, shop.email);
  }

  async signToken(
    shopId: number,
    email: string,
  ): Promise<{ access_token: String }> {
    const payload = {
      sub: shopId,
      email,
    };

    const secret = this.config.get('JWT_SECRET');

    const token = await this.jwt.signAsync(payload, {
      expiresIn: '15m',
      secret: secret,
    });
    return {
      access_token: token,
    };
  }
}
