import { IsNotEmpty, isNotEmpty } from "class-validator";
import { Categories } from "src/Categories/entities/categories.entities";
import { Custumer } from "src/customer/entities/customer.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'tb_product'})
export class Product{
    [x: string]: any;

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false })
    name: string

    @IsNotEmpty()
    @Column({length: 255, nullable: false })
    description: string
   
    @IsNotEmpty()
    @Column( 'decimal',{precision: 7, scale: 2, nullable: false})
    value: number

    @UpdateDateColumn()
    date: Date

    @ManyToOne(()=> Categories, (categories) => categories.product, {
        onDelete: 'CASCADE'
    }) 
    categories: Categories

    @ManyToOne(() => Custumer, (custumer) => custumer.product, {
        onDelete: "CASCADE"
    })

    custumer: Custumer



}