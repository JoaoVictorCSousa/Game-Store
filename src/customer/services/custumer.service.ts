import { HttpException, HttpStatus } from "@nestjs/common";
import { Injectable } from "@nestjs/common/decorators";
import { InjectRepository } from "@nestjs/typeorm";
import { Bcrypt } from "src/auth/bcrypt/bcrypt";
import { Repository } from "typeorm";
import { Custumer } from "../entities/customer.entity";

@Injectable()
export class CustumerService{
    constructor(
        @InjectRepository(Custumer)
        private custumerRepository: Repository<Custumer>,
        private bcrypt: Bcrypt
    ){}

    async findByCustumer(custumer: string): Promise< Custumer | undefined> {
        return await this.custumerRepository.findOne({
            where: {
                user: custumer
            }
        })
    }

    async findAll(): Promise<Custumer[]> {
        return await this.custumerRepository.find(
            {
                relations:{
                    product: true
                }
            }
        );
    }

    async findById(id: number): Promise<Custumer>{
        let custumer = await this.custumerRepository.findOne({
            where: {
                id
            },
            relations: {
                product: true
            }
        });

        if(!custumer)
            throw new HttpException('Custumer not found!',HttpStatus.NOT_FOUND);
            return custumer;
    }

    async create (custumer: Custumer): Promise<Custumer>{

        let searchCustumer = await this.findByCustumer(custumer.user);

        if (!searchCustumer){
            custumer.password = await this.bcrypt.encryptPassword(custumer.password)
            return await this.custumerRepository.save(custumer);
    }

    throw new HttpException("User already exists!", HttpStatus.BAD_REQUEST)
    }

    async update(custumer: Custumer): Promise<Custumer>{
        let updateCustumer: Custumer = await this.findById(custumer.id);
        let searchCustumer = await this.findByCustumer(custumer.user);

        if(!updateCustumer)
        throw new HttpException('Custumer not found!',HttpStatus.NOT_FOUND);

        if(searchCustumer && searchCustumer.id !== custumer.id)
        throw new HttpException('Custumer -email- already exists', HttpStatus.BAD_REQUEST);

        custumer.password = await this.bcrypt.encryptPassword(custumer.password)
        return await this.custumerRepository.save(custumer);
    }

}