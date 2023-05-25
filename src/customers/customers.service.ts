import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { Customer } from './schemas/customer.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model, UpdateQuery } from 'mongoose';

@Injectable()
export class CustomersService {
  constructor(
    @InjectModel(Customer.name) private customerModel: Model<Customer>,
  ) {}
  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const createdCustomer = new this.customerModel(createCustomerDto);
    const savedCustomer = await createdCustomer.save();
    const customerObject = savedCustomer.toObject();
    delete customerObject.password;
    return customerObject;
  }

  async findAll(): Promise<Customer[]> {
    return this.customerModel.find().exec();
  }

  async findOne(id: string): Promise<Customer | null> {
    return this.customerModel.findOne({ _id: id }).exec();
  }

  async update(
    id: string,
    updateCustomer: UpdateQuery<Customer>,
  ): Promise<Customer> {
    return this.customerModel
      .findByIdAndUpdate({ _id: id }, updateCustomer, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.customerModel.findByIdAndDelete({ _id: id }).exec();
  }

  async validate(login: string, password: string): Promise<Customer | null> {
    const customer = await this.customerModel
      .findOne({ login: login })
      .select('+password')
      .lean()
      .exec();
    const match = password === customer.password;
    delete customer.password;
    return match ? customer : null;
  }
}
