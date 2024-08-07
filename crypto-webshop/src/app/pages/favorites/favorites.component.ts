import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";
import {ProductComponent} from "../../service/product/product.component";
import {FavoritesService} from "../../service/FavoritesService";
import {Favorite} from "../../models/favorite";
import {CartService} from "../../service/CartService";

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    NgForOf
  ],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent implements OnInit{

  favorites: Favorite[] = [];

  constructor(private productService: ProductComponent, private favoritesService: FavoritesService,
              private cartService: CartService) {
  }
  ngOnInit() {
    this.favoritesService.getFavorites().subscribe((data: Favorite[]) => {
      this.favorites = data;
    });
  }

  deleteFromFavorites(favorite: Favorite) {
    this.favoritesService.deleteFromFavorites(favorite.id).subscribe();

  }

  addToCart(favorite: Favorite) {
    this.cartService.addToCart(favorite).subscribe();

  }

}
