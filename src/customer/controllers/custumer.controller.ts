import { Body, Controller, Get, HttpCode, HttpStatus, Post, Put, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../../auth/guard/jwt-auth.guard";
import { Custumer } from "../entities/customer.entity";
import { CustumerService } from "../services/custumer.service";



@Controller("/custumers")
export class UsuarioController {
    constructor(private readonly custumerService: CustumerService) { }

    @UseGuards(JwtAuthGuard)
    @Get('/all')
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Custumer[]> {
        return this.custumerService.findAll();
    }

    @HttpCode(HttpStatus.CREATED)
    @Post('/register')
    async create(@Body() custumer: Custumer): Promise<Custumer> {
        return await this.custumerService.create(custumer);
    }

    @UseGuards(JwtAuthGuard)
    @Put('/update')
    @HttpCode(HttpStatus.OK)
    async update(@Body() custumer: Custumer): Promise<Custumer> {
        return this.custumerService.update(custumer);
    }

}