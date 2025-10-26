import { AuthGuard } from "@nestjs/passport";

export class ClientJwtGuard extends AuthGuard('jwt') {
    constructor() {
        super();
    }
}