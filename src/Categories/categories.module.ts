import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Categories } from "./entities/categories.entities";

@Module({
    imports: [TypeOrmModule.forFeature([Categories])],
    providers: [],
    controllers: [],
    exports: [TypeOrmModule],
})

export class CategoriesModule{}