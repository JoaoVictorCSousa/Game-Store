import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Categories } from "../entities/categories.entities";

@Injectable()
export class CategoriesService {
    constructor(
        @InjectRepository(Categories)
        private categoriesRepository: Repository<Categories>
    ){}

   async findAll(): Promise<Categories[]> {
    return await this.categoriesRepository.find({
        relations: {
            product: true
        }
    });
   }

   async findById(id: number): Promise<Categories>{
    let categories = await this.categoriesRepository.findOne({
        where: {
            id
        },
        relations: {
            product: true
        }
    });
    if(!categories)
        throw new HttpException('Category not found!', HttpStatus.NOT_FOUND);

        return categories;
    }
    
    async findByDescription (Game_Gender: string): Promise<Categories[]> {
        return await this.categoriesRepository.find({
            where: {Game_Gender: ILike(`%${Game_Gender}%`)},
            relations: {
                product: true
            }
        })
    }

    async create(Categories: Categories) : Promise<Categories> {
        return await this.categoriesRepository.save(Categories);
    }

    async update (Categories: Categories): Promise < Categories> {
        let searchCategory = await this.findById(Categories.id);

        if (!searchCategory || !Categories.id)
        throw new HttpException('Category not found', HttpStatus.NOT_FOUND);

        return await this.categoriesRepository.save(Categories);
    }

    async delete (id: number) : Promise < DeleteResult > {

        let searchCategory = await this.findById(id);

        if(!searchCategory)
        throw new HttpException('Category not found!', HttpStatus.NOT_FOUND);
        return await this.categoriesRepository.delete(id)
    }

   }
