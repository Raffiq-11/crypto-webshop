import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";
import {ProductComponent} from "../../service/product/product.component";
import {FavoritesService} from "../../service/FavoritesService";
import {CartService} from "../../service/CartService";
import {Favorite} from "../../models/favorite";
import {Cart} from "../../models/cart";
import {Product} from "../../models/product/product.component";
import {CryptoCurrency} from "../../models/cryptocurrency";
import {CryptocurrencyService} from "../../service/CryptocurrencyService";

@Component({
  selector: 'app-shoppingcart',
  standalone: true,
    imports: [
        RouterLink,
        NgForOf
    ],
  templateUrl: './shoppingcart.component.html',
  styleUrl: './shoppingcart.component.css'
})
export class ShoppingcartComponent implements OnInit{

  cart: Cart[] = [];

  constructor(private productService: ProductComponent, private favoritesService: FavoritesService,
              private cartService: CartService, private cryptoService: CryptocurrencyService) {
  }
  ngOnInit() {
    this.cartService.getProductsFromCart().subscribe((data: Cart[]) => {
      this.cart = data;

      this.cart.forEach((product: Product) => {
        this.cryptoService.getCryptoByShortname(product.shortName).subscribe((cryptoData: CryptoCurrency) => {
          product.price = cryptoData.data.amount; // Assign the fetched price to the product
        });
      });
    });
  }

  deleteFromCart(favorite: Favorite) {
    this.cartService.deleteFromCart(favorite.id).subscribe();
  }

  getTotalPrice(): number {
    return this.cart.reduce((total, item) => {
      return total + (item.amount ?? 0) * item.price;
    }, 0);
  }
}
