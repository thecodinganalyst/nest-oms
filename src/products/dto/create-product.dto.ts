import { IsDecimal, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @IsString()
  @ApiProperty({ example: 'Product 1', description: 'The name of the product' })
  name: string;

  @IsString()
  @ApiProperty({
    example: 'Product 1 description',
    description: 'The description of the product',
  })
  description: string;

  @IsDecimal()
  @ApiProperty({ example: '100.00', description: 'The price of the product' })
  price: number;

  @IsString()
  @ApiProperty({
    example: 'SGD',
    description: 'The currency of the price of the product',
  })
  currency: string;
}
