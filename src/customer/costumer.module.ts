import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Bcrypt } from "src/auth/bcrypt/bcrypt";
import { CustumerController } from "./controllers/custumer.controller";
import { Custumer } from "./entities/customer.entity";
import { CustumerService } from "./services/custumer.service";

@Module({
    imports: [TypeOrmModule.forFeature([Custumer])],
    providers: [CustumerService, Bcrypt],
    controllers: [CustumerController],
    exports: [CustumerService],
})

export class CustumerModule{}