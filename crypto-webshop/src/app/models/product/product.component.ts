import { Component } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  shortName: string;
  description: string;
  imageUrl: string;
  price: number;
}

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent {
  }
