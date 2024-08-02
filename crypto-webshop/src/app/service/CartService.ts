import {Component, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import exp from "constants";
import { Product } from '../models/product/product.component';
import {Cart} from "../models/cart";
import {Favorite} from "../models/favorite";
// import { Product } from '../../models/product.model';


@Injectable({ providedIn: 'root' })


export class CartService {

  // private apiUrl = '/api/products'
  private apiUrl = 'http://localhost:8080/api/cart'; // Update this URL according to your backend server


  constructor(private http: HttpClient) {
  }

  getProductsFromCart(): Observable<Cart[]> {
    return this.http.get<Cart[]>(this.apiUrl);
  }

  getProductById(id: number): Observable<Cart> {
    return this.http.get<Cart>(`${this.apiUrl}/${id}`);
  }

  addToCart(cart: Cart): Observable<Cart> {
    console.log("in addfoavirte")
    console.log(cart)
    return this.http.post<Favorite>(this.apiUrl, cart);
  }

  /** DELETE: delete the hero from the server */
  deleteFromCart(id: number): Observable<unknown> {
    const url = `${this.apiUrl}/${id}`; // DELETE api/heroes/42
    return this.http.delete(url)
  }

}
