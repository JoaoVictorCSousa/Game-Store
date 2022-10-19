import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Product } from "../entities/product.entities";

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>
    ){}

   async findAll(): Promise<Product[]> {
    return await this.productRepository.find({
        relations: {
            categories: true
        }
    });
   }

   async findById(id: number): Promise<Product>{
    let product = await this.productRepository.findOne({
        where: {
            id
        },
        relations: {
            categories: true
        }
    });
    if(!product)
        throw new HttpException('Product not found!', HttpStatus.NOT_FOUND);

        return product;
    }
    
    async findByDescription (description: string): Promise<Product[]> {
        return await this.productRepository.find({
            where: {description: ILike(`%${description}%`)},
            relations: {
                categories: true
            }
        })
    }

    async create(Product: Product) : Promise<Product> {
        return await this.productRepository.save(Product);
    }

    async update (Product: Product): Promise < Product> {
        let searchProduct = await this.findById(Product.id);

        if (!searchProduct || !Product.id)
        throw new HttpException('Product not found', HttpStatus.NOT_FOUND);

        return await this.productRepository.save(Product);
    }

    async delete (id: number) : Promise < DeleteResult > {

        let searchProduct = await this.findById(id);

        if(!Product)
        throw new HttpException('Product not found!', HttpStatus.NOT_FOUND);
        return await this.productRepository.delete(id)
    }

   }
