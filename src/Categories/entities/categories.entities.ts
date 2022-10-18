import { IsNotEmpty } from "class-validator";
import { Product } from "src/Product/entities/product.entities";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'tb_categories'})
export class Categories{

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    Game_Gender: string;

    @UpdateDateColumn()
    date: Date
    product: any;

    @OneToMany(()=> Product, (product) => product.categories, {
        onDelete: 'CASCADE'
    }) 
    categories: Categories



}