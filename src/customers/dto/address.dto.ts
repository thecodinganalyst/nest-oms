import { IsString } from 'class-validator';

export class AddressDto {
  building: string;
  street: string;
  unit: string;

  @IsString()
  city: string;

  @IsString()
  country: string;
  postal: string;
}
