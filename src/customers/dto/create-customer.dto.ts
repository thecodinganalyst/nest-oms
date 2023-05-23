import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumberString,
  IsString,
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

  @IsBoolean()
  @ApiProperty({ example: 'true', description: 'If the customer is active' })
  isActive: boolean;

  @ValidateNested()
  address: AddressDto;

  @IsNumberString()
  @ApiProperty({
    example: '98771234',
    description: 'The contact number of the customer',
  })
  contact: string;
}
