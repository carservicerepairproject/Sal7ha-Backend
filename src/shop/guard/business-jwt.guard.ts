import { AuthGuard } from "@nestjs/passport";

export class BusinessJwtGuard extends AuthGuard('business-jwt') {
    constructor() {
        super();
    }
}