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
  @Prop()
  givenName: string;

  @ApiProperty({
    example: 'Jones',
    description: 'The family name of the customer',
  })
  @Prop()
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
  @Prop()
  email: string;

  @ApiProperty({ example: 'true', description: 'If the customer is active' })
  @Prop({ default: true })
  isActive: boolean;

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
  @Prop()
  contact: string;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
