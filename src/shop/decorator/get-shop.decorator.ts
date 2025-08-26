import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetShop = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.shop;
  },
);
