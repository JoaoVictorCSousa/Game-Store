import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoriesController } from "./controllers/categories.controller";
import { Categories } from "./entities/categories.entities";
import { CategoriesService } from "./services/categories.service";

@Module({
    imports: [TypeOrmModule.forFeature([Categories])],
    providers: [CategoriesService],
    controllers: [CategoriesController],
    exports: [TypeOrmModule],
})

export class CategoriesModule{}