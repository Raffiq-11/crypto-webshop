import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Product} from '../../models/product/product.component';
import {ProductComponent} from "../../service/product/product.component";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {FavoritesService} from "../../service/FavoritesService";
import {CryptocurrencyService} from "../../service/CryptocurrencyService";
import {CartService} from "../../service/CartService";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Cart} from "../../models/cart";
import {CryptoCurrency} from "../../models/cryptocurrency";

@Component({
  selector: 'app-detailview',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    NgOptimizedImage,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './detailview.component.html',
  styleUrl: './detailview.component.css'
})

export class DetailviewComponent implements OnInit{

  product: Product | undefined;

  price: number | null = null;

  amount: number | null = null;

  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductComponent,
    private favoritesService: FavoritesService,
    private cartService: CartService,
    private cryptoService: CryptocurrencyService
  ) {}

  ngOnInit(): void {
    const name = String(this.route.snapshot.paramMap.get('name'));
    this.productService.getProductByName(name).subscribe((data: Product) => {
      this.product = data;

        this.cryptoService.getCryptoByShortname(this.product.shortName).subscribe((cryptoData: CryptoCurrency) => {
          this.price = cryptoData.data.amount;
        });
    });
  }

  addToFavorites(product: Product) {
    this.favoritesService.addFavorite(product).subscribe();

  }


  addToCart(cart: Cart) {
    console.log("in add carr")
    if (this.amount !== null && this.amount > 0 && this.amount < 10000000) {
      console.log("in add cart IFF")
      cart.amount = this.amount;
      this.cartService.addToCart(cart).subscribe();
      this.errorMessage = '';
      console.log(cart);
    } else {
      this.errorMessage = 'Please enter a valid amount.';
    }
  }

}
