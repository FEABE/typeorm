import { IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  goods_name: string;
  @IsNumber()
  price: number;
  @IsString()
  salt: string;
}
