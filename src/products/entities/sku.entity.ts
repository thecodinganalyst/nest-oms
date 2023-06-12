import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Product } from './product.entity';

@Entity()
export class Sku {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: '1', description: 'Product id of the SKU' })
  @ManyToOne(() => Sku, (product) => product.id)
  @JoinColumn()
  product: Product;

  @ApiProperty({
    example: 'Product 1 description',
    description: 'The description of the product',
  })
  @Column()
  description: string;

  @ApiProperty({ example: '100.00', description: 'The price of the product' })
  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @ApiProperty({
    example: 'SGD',
    description: 'The currency of the price of the product',
  })
  @Column()
  currency: string;

  @ApiProperty({
    example: 'http://example.com/image.png',
    description: 'The url of the picture of the product',
  })
  @Column()
  photos: string;

  @ApiProperty({
    example: '100',
    description: 'Stock count of the product',
  })
  @Column()
  stockCount: number;
}
