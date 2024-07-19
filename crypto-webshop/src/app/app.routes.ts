import { Routes } from '@angular/router';
import {OverviewComponent} from "./pages/overview/overview.component";
import {DetailviewComponent} from "./pages/detailview/detailview.component";
import {FavoritesComponent} from "./pages/favorites/favorites.component";
import {ShoppingcartComponent} from "./pages/shoppingcart/shoppingcart.component";

export const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: 'overview', component: OverviewComponent },
  { path: 'detail/:id', component: DetailviewComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'shoppingcart', component: ShoppingcartComponent },
];
