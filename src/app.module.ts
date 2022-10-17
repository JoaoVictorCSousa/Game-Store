import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Product } from './Product/entities/product.entities';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_product',
      entities: [Product],
      synchronize: true

    }),
    ProductTheme
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
