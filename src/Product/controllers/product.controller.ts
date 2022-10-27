import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/guard/jwt-auth.guard";
import { Product } from "../entities/product.entities";
import { ProductService } from "../services/product.service";

@UseGuards(JwtAuthGuard)
@Controller("/products")
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise <Product[]> {
        return this.productService.findAll();

    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Product> {
        return this.productService.findById(id);
    }

    @Get('/description/:description')
    @HttpCode(HttpStatus.OK)
    findByDescription(@Param('description') description: string): Promise <Product[]> {
        return this.productService.findByDescription(description);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() Product: Product): Promise <Product> {
    return this.productService.create(Product);
}

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() Product: Product): Promise < Product > {
        return this.productService.update(Product);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.OK)
    delete (@Param('id', ParseIntPipe)id: number){
        return this.productService.delete(id);
    }

}