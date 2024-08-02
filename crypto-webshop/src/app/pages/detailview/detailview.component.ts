import {Component, Injectable, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import { Product } from '../../models/product/product.component';
import {ProductComponent} from "../../service/product/product.component";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {AppComponent} from "../../app.component";
import {FavoritesService} from "../../service/FavoritesService";
import {CartService} from "../../service/CartService";

@Component({
  selector: 'app-detailview',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './detailview.component.html',
  styleUrl: './detailview.component.css'
})

export class DetailviewComponent implements OnInit{

  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductComponent,
    private favoritesService: FavoritesService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(id).subscribe((data: Product) => {
      this.product = data;
    });
  }

  addToFavorites(product: Product) {
    this.favoritesService.addFavorite(product);

  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);

  }

}
