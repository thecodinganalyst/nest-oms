import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AddressDto {
  @ApiProperty({ example: 'Capital Tower', description: 'The building name' })
  building: string;

  @ApiProperty({ example: '168 Robinson Road', description: 'The street name' })
  street: string;

  @ApiProperty({ example: '#20-01', description: 'The unit number' })
  unit: string;

  @IsString()
  @ApiProperty({ example: 'Singapore', description: 'The city' })
  city: string;

  @IsString()
  @ApiProperty({ example: 'Singapore', description: 'The country' })
  country: string;

  @ApiProperty({ example: '068912', description: 'The postal code' })
  postal: string;
}
