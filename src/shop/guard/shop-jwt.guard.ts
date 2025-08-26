import { AuthGuard } from "@nestjs/passport";

export class ShopJwtGuard extends AuthGuard('shop-jwt') {
    constructor() {
        super();
    }
}