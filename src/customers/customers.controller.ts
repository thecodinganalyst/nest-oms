import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Customer } from './schemas/customer.schema';
import { Public } from '../auth/public.decorator';

@ApiBearerAuth()
@ApiTags('Customers')
@Controller({ version: '1', path: 'customers' })
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Public()
  @Post()
  @ApiOperation({ summary: 'Create a new customer' })
  @ApiResponse({
    status: 201,
    description: 'The created customer',
    type: Customer,
  })
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customersService.create(createCustomerDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all existing customers' })
  @ApiResponse({
    status: 200,
    description: 'All the customers available',
    type: Customer,
    isArray: true,
  })
  findAll() {
    return this.customersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific customer' })
  @ApiResponse({
    status: 200,
    description: 'The requested customer by id',
    type: Customer,
  })
  findOne(@Param('id') id: string) {
    return this.customersService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Updates a specific customer' })
  @ApiResponse({
    status: 200,
    description: 'The updated customer',
    type: Customer,
  })
  update(
    @Param('id') id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ) {
    delete updateCustomerDto.password;
    return this.customersService.update(id, updateCustomerDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a specific customer' })
  @ApiResponse({
    status: 200,
  })
  remove(@Param('id') id: string) {
    return this.customersService.remove(id);
  }
}
