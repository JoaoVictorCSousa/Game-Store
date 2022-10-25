import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Custumer } from "./entities/customer.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Custumer])],
    providers: [],
    controllers: [],
    exports: [],
})

export class CustumerModule{}