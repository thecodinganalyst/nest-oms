import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Sku } from './sku.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Product 1', description: 'The name of the product' })
  @Column()
  name: string;

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
    example: 'Books, Toys, Office, etc',
    description: 'The category of the product',
  })
  @Column()
  category: string;

  @OneToMany(() => Sku, (Sku) => Sku.product)
  skus: Sku[];
}
