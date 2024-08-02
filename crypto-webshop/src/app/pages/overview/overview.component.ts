import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {ProductComponent} from "../../service/product/product.component";
import { Product } from '../../models/product/product.component';
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {FavoritesService} from "../../service/FavoritesService";

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent implements OnInit{

  products: Product[] = [];

  constructor(private productService: ProductComponent, private favoritesService: FavoritesService) {
  }
  ngOnInit() {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  addToFavorites(product: Product) {
    this.favoritesService.addFavorite(product);

  }
}
