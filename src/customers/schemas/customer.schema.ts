import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CustomerDocument = HydratedDocument<Customer>;

@Schema()
export class Customer {
  @Prop()
  givenName: string;

  @Prop()
  familyName: string;

  @Prop({ required: true, unique: true })
  login: string;

  @Prop()
  email: string;

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

  @Prop()
  contact: string;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
