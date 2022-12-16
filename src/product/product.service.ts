import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  private readonly goods: Product[] = [];
  create(createProductDto: CreateProductDto): Product {
    const { goods_name, price, salt } = createProductDto;
    const good = {
      goods_name: goods_name,
      price: price,
      salt: salt,
    };
    this.goods.push(good);
    return good;
  }

  findAll() {
    return `This action returns all product`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto): Product {
    const { goods_name, price, salt } = updateProductDto;
    const good = {
      goods_name: goods_name,
      price: price,
      salt: salt,
    };
    this.goods[id] = good;
    return this.goods[id];
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
