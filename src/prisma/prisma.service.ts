import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor(config: ConfigService) {
    const databaseUrl =
      config.get<string>('DATABASE_URL') ?? process.env.DATABASE_URL;

    const host = (() => {
      try {
        return databaseUrl ? new URL(databaseUrl).host : 'missing DATABASE_URL';
      } catch {
        return 'invalid DATABASE_URL';
      }
    })();
    console.log('DB HOST:', host);

    const pool = new Pool({ connectionString: databaseUrl });
    const adapter = new PrismaPg(pool);
    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
