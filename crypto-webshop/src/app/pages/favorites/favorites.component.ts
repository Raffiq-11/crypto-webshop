import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";
import {ProductComponent} from "../../service/product/product.component";
import {FavoritesService} from "../../service/FavoritesService";
import {Favorite} from "../../models/favorite";
import {CartService} from "../../service/CartService";
import {FormsModule} from "@angular/forms";
import {Cart} from "../../models/cart";
import {CryptocurrencyService} from "../../service/CryptocurrencyService";
import {CryptoCurrency} from "../../models/cryptocurrency";

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    NgForOf,
    FormsModule
  ],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent implements OnInit{

  favorites: Favorite[] = [];

  constructor(private productService: ProductComponent, private favoritesService: FavoritesService,
              private cartService: CartService, private cryptoService: CryptocurrencyService) {
  }
  ngOnInit() {
    this.favoritesService.getFavorites().subscribe((data: Favorite[]) => {
      this.favorites = data;

      this.favorites.forEach((favorite: Favorite) => {
        this.cryptoService.getCryptoByShortname(favorite.shortName).subscribe((cryptoData: CryptoCurrency) => {
          favorite.price = cryptoData.data.amount;
        });
      });
    });
  }

  deleteFromFavorites(favorite: Favorite) {
    this.favoritesService.deleteFromFavorites(favorite.id).subscribe();

  }













  amount: number | null = null; // The input amount
  errorMessage: string = ''; // Error message for validation

  addToCart(cart: Cart) {
    if (this.amount !== null && this.amount > 0) {
      // this.amount = cart.amount;
      cart.amount = this.amount;
      this.cartService.addToCart(cart).subscribe();
      this.errorMessage = ''; // Clear any previous error messages
      console.log(cart);
    } else {
      this.errorMessage = 'Please enter a valid amount.'; // Set an error message if validation fails
    }
  }



  // savedInput: string = '';

  // saveInput(): void {
  //   this.savedInput = this.userInput;
  //   console.log('Saved input:', this.savedInput);
  // }






//
//   readonly animal = signal('');
//   name = model('');
//   readonly dialog = inject(MatDialog);
//
//   openDialog(): void {
//     const dialogRef = this.dialog.open(DialogChooseAmountDialog, {
//       data: {name: this.name(), animal: this.animal()},
//     });
//
//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//       if (result !== undefined) {
//         this.animal.set(result);
//       }
//     });
//   }
// }
//
// @Component({
//   selector: 'dialog-choose-amount-dialog',
//   templateUrl: 'dialog-choose-amount-dialog.html',
//   standalone: true,
//   imports: [
//     MatFormFieldModule,
//     MatInputModule,
//     FormsModule,
//     MatButtonModule,
//     MatDialogTitle,
//     MatDialogContent,
//     MatDialogActions,
//     MatDialogClose,
//   ],
// })
// export class DialogChooseAmountDialog {
//   readonly dialogRef = inject(MatDialogRef<DialogChooseAmountDialog>);
//   readonly data = inject<DialogData>(MAT_DIALOG_DATA);
//   readonly animal = model(this.data.animal);
//
//   onNoClick(): void {
//     this.dialogRef.close();
//   }

}
