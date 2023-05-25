import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CustomersService } from '../customers/customers.service';
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private customersService: CustomersService) {
    super();
  }

  async validate(login: string, password: string): Promise<any> {
    const customer = await this.customersService.validate(login, password);
    if (!customer) throw new UnauthorizedException();
    return customer;
  }
}
