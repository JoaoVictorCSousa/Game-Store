import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt/dist";
import { PassportModule } from "@nestjs/passport";
import { CustumerModule } from "src/customer/costumer.module";
import { Bcrypt } from "./bcrypt/bcrypt";
import { jwtConstants } from "./constants/constants";
import { AuthService } from "./services/auth.service";
import { LocalStrategy } from "./strategy/local.strategy";

@Module({
    imports: [
        CustumerModule,
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: {expiresIn: '24h'},
        })
    ],
    providers: [Bcrypt, AuthService, LocalStrategy],
    controllers: [],
    exports: [Bcrypt],
})

export class AuthModule{}