import { Injectable } from '@angular/core';
import { Product } from '../models/product/product.component';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Favorite} from "../models/favorite";

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private apiUrl = 'http://localhost:8080/api/favorites'; // Update this URL according to your backend server

  constructor(private http: HttpClient) {
  }

  addFavorite(favorite: Favorite): Observable<Favorite> {
    console.log("in addfoavirte")
    console.log(favorite)
    return this.http.post<Favorite>(this.apiUrl, favorite);
  }

  getFavorites(): Observable<Favorite[]> {
    return this.http.get<Favorite[]>(this.apiUrl);
  }

  /** DELETE: delete the hero from the server */
  deleteFromFavorites(id: number): Observable<unknown> {
    const url = `${this.apiUrl}/${id}`; // DELETE api/heroes/42
    return this.http.delete(url)
  }
}
