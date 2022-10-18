import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { create } from "domain";
import { Categories } from "../entities/categories.entities";
import { CategoriesService } from "../services/categories.service";

@Controller("/controller")
export class CategoriesController {
    constructor(private readonly categoriesService: CategoriesService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise <Categories[]> {
        return this.categoriesService.findAll();

    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Categories> {
        return this.categoriesService.findById(id);
    }

    @Get('/game_gender/:game_gender')
    @HttpCode(HttpStatus.OK)
    findByDescription(@Param('game_gender') game_gender: string): Promise <Categories[]> {
        return this.categoriesService.findByDescription(game_gender);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
  create(@Body() Categories: Categories): Promise <Categories> {
    return this.categoriesService.create(Categories);
}

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() Categories: Categories): Promise < Categories > {
        return this.categoriesService.update(Categories);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.OK)
    delete (@Param('id', ParseIntPipe)id: number){
        return this.categoriesService.delete(id);
    }

}