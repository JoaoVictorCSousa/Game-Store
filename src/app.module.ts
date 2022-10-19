import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './Categories/categories.module';
import { Categories } from './Categories/entities/categories.entities';
import { Product } from './Product/entities/product.entities';
import { ProductModule } from './Product/product.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_gamestore',
      entities: [Product, Categories],
      synchronize: true
    }),
    ProductModule,
    CategoriesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
