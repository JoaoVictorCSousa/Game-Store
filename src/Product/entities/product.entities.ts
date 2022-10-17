import { IsNotEmpty, isNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'pd_theme'})
export class Product{

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()

    @Column({length: 255, nullable: false})
    valor: number
}