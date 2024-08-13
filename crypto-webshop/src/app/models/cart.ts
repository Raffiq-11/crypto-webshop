export interface Cart {
  id: number;
  name: string;
  shortName: string;
  description: string;
  imageUrl: string;
  price: number;
  amount?: number;
}
