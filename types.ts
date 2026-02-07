
export enum FabricType {
  ANKARA = 'Ankara',
  ADIRE = 'Adire'
}

export interface Product {
  id: string;
  name: string;
  price: number;
  type: FabricType;
  image: string;
  description: string;
  material: string;
  color: string;
  size: string;
  care: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface UserProfile {
  firstName: string;
  lastName: string;
  phone1: string;
  phone2: string;
  email: string;
  address: string;
  country: string;
  state: string;
}
