import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Product } from './entities/product.entity';

@ApiBearerAuth()
@ApiTags('Products')
@Controller({ version: '1', path: 'products' })
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all existing products' })
  @ApiResponse({
    status: 200,
    description: 'All the products available',
    type: Product,
    isArray: true,
  })
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific product' })
  @ApiResponse({
    status: 200,
    description: 'The requested product by id',
    type: Product,
  })
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }
}
