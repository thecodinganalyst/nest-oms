import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type CustomerDocument = HydratedDocument<Customer>;

@Schema()
export class Customer {
  @ApiProperty({
    example: 'David',
    description: 'The given name of the customer',
  })
  @Prop({ required: true })
  givenName: string;

  @ApiProperty({
    example: 'Jones',
    description: 'The family name of the customer',
  })
  @Prop({ required: true })
  familyName: string;

  @ApiProperty({
    example: 'davidjones',
    description: 'The login of the customer',
  })
  @Prop({ required: true, unique: true })
  login: string;

  @ApiProperty({
    example: 'davidjones@example.com',
    description: 'The email of the customer',
  })
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({
    type: {
      building: { type: String },
      street: { type: String },
      unit: { type: String },
      city: { type: String },
      country: { type: String },
      postal: { type: String },
    },
  })
  @ApiProperty({
    example: {
      building: '123',
      street: 'Main St',
      unit: 'Apt 4',
      city: 'City',
      country: 'Country',
      postal: '12345',
    },
    description: 'The address of the customer',
  })
  address: {
    building: string;
    street: string;
    unit: string;
    city: string;
    country: string;
    postal: string;
  };

  @ApiProperty({
    example: '98771234',
    description: 'The contact number of the customer',
  })
  @Prop({ required: true })
  contact: string;

  @Prop({ required: true, select: false })
  password: string;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
