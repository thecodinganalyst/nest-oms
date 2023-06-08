import {
  IsEmail,
  IsNotEmpty,
  IsNumberString,
  IsString,
  IsStrongPassword,
  ValidateNested,
} from 'class-validator';
import { AddressDto } from './address.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCustomerDto {
  @IsString()
  @ApiProperty({
    example: 'David',
    description: 'The given name of the customer',
  })
  givenName: string;

  @IsString()
  @ApiProperty({
    example: 'Jones',
    description: 'The family name of the customer',
  })
  familyName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'davidjones',
    description: 'The login of the customer',
  })
  login: string;

  @IsEmail()
  @ApiProperty({
    example: 'davidjones@example.com',
    description: 'The email of the customer',
  })
  email: string;

  @ValidateNested()
  address: AddressDto;

  @IsNumberString()
  @ApiProperty({
    example: '98771234',
    description: 'The contact number of the customer',
  })
  contact: string;

  @IsStrongPassword({
    minLength: 12,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  })
  password: string;
}
