import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {ProductComponent} from "../../service/product/product.component";
import {Product} from '../../models/product/product.component';
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {FavoritesService} from "../../service/FavoritesService";
import {CryptoCurrency} from "../../models/cryptocurrency";
import {CryptocurrencyService} from "../../service/CryptocurrencyService";

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

  price: number | null = null;

  constructor(private productService: ProductComponent, private favoritesService: FavoritesService
  , private cryptoService: CryptocurrencyService) {
  }
  ngOnInit() {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;

      this.products.forEach((product: Product) => {
          this.cryptoService.getCryptoByShortname(product.shortName).subscribe((cryptoData: CryptoCurrency) => {
            product.price = cryptoData.data.amount; // Assign the fetched price to the product
          });
      });
    });
  }

  addToFavorites(product: Product) {
    this.favoritesService.addFavorite(product).subscribe();

  }
}
