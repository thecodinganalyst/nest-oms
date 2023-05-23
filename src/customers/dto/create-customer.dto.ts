import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumberString,
  IsString,
  ValidateNested,
} from 'class-validator';
import { AddressDto } from './address.dto';

export class CreateCustomerDto {
  @IsString()
  givenName: string;

  @IsString()
  familyName: string;

  @IsString()
  @IsNotEmpty()
  login: string;

  @IsEmail()
  email: string;

  @IsBoolean()
  isActive: boolean;

  @ValidateNested()
  address: AddressDto;

  @IsNumberString()
  contact: string;
}
