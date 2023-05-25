import { Module } from '@nestjs/common';
import { LocalStrategy } from './local.strategy';
import { CustomersModule } from '../customers/customers.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [CustomersModule, PassportModule],
  providers: [LocalStrategy],
})
export class AuthModule {}
