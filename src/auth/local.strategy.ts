import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Customer } from '../customers/schemas/customer.schema';
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<Customer> {
    const customer = await this.authService.validateUser(username, password);
    if (!customer) throw new UnauthorizedException();
    return customer;
  }
}
