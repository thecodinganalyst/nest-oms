import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const product = this.productRepository.create(createProductDto);
    return this.productRepository.save(product);
  }

  async search(
    searchString: string,
    take: number,
    cursor: string,
  ): Promise<PaginationResponseDto<Product>> {
    const [prodName, prodId] = cursor?.split(':');
    const products: Product[] = await this.productRepository
      .createQueryBuilder('product')
      .where('product.name LIKE :searchString', {
        searchString: `%${searchString}%`,
      })
      .andWhere(
        cursor
          ? 'product.name > :prodName OR (product.name = :prodName && product.id > :prodId)'
          : '1=1',
        { prodName, prodId },
      )
      .orderBy('product.name', 'ASC')
      .take(take)
      .getMany();

    const lastProduct = products[products.length - 1];
    const nextCursor = lastProduct
      ? `${lastProduct.name}:${lastProduct.id}`
      : null;

    return {
      data: products,
      cursor: nextCursor,
    };
  }

  async findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async findOne(id: number): Promise<Product | undefined> {
    return this.productRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updateProductDto: UpdateProductDto,
  ): Promise<Product | undefined> {
    await this.productRepository.update(id, updateProductDto);
    return this.productRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.productRepository.delete(id);
  }
}
