import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CategoriesModule } from './Categories/categories.module';
import { Categories } from './Categories/entities/categories.entities';
import { CustumerModule } from './customer/costumer.module';
import { Custumer } from './customer/entities/customer.entity';
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
      entities: [Product, Categories,Custumer],
      synchronize: true
    }),
    ProductModule,
    CategoriesModule,
    AuthModule,
    CustumerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
