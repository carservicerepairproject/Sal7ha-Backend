import { defineConfig, env } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma', // adjust if your schema path differs
  datasource: {
    url: env('DATABASE_URL'),
  },
});
  