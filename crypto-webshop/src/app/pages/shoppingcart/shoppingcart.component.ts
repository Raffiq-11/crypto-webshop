import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";
import {Product} from "../../models/product/product.component";
import {ProductComponent} from "../../service/product/product.component";
import {FavoritesService} from "../../service/FavoritesService";
import {CartService} from "../../service/CartService";
import {Favorite} from "../../models/favorite";
import {Cart} from "../../models/cart";
import {name} from "express";

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
              private cartService: CartService) {
  }
  ngOnInit() {
    this.cartService.getProductsFromCart().subscribe((data: Cart[]) => {
      this.cart = data;
    });
  }

  deleteFromCart(favorite: Favorite) {
    this.cartService.deleteFromCart(favorite.id);

  }

  protected readonly name = name;
}
