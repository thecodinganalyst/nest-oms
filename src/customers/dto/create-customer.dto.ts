export class CreateCustomerDto {
  givenName: string;
  familyName: string;
  login: string;
  email: string;
  isActive: boolean;
  address: {
    building: string;
    street: string;
    unit: string;
    city: string;
    country: string;
    postal: string;
  };
  contact: string;
}
