import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CustomersService } from '../customers/customers.service';
import { Customer } from '../customers/schemas/customer.schema';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private customersService: CustomersService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const customer = await this.customersService.validate(username, password);
    if (!customer) throw new UnauthorizedException();
    return customer;
  }

  async login(customer: Customer) {
    const payload = { login: customer.login, sub: customer.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
