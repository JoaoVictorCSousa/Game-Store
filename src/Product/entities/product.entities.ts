import { IsNotEmpty, isNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'tb_product'})
export class Product{

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


}