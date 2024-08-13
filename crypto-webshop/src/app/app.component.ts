import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CartService} from "./service/CartService";
import {Cart} from "./models/cart";
import {Product} from "./models/product/product.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent implements OnInit {
  title = 'crypto-webshop';
  cartItemCount: number = 0;
  cart: Cart[] = [];

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {

    this.cartService.getProductsFromCart().subscribe((data: Cart[]) => {
      this.cart = data;
      this.cart.forEach((product: Product) => {
        this.cartItemCount = this.cartItemCount + 1;
      });
    });
  }

  getTotalPrice(): number {
    return this.cart.reduce((total, item) => {
      return total + (item.amount ?? 0) * item.price;
    }, 0);
  }
}
