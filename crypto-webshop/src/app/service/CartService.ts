import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Cart} from "../models/cart";


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
    return this.http.post<Cart>(this.apiUrl, cart).pipe(
      catchError(this.handleError)
    );
  }

  /** DELETE: delete the hero from the server */
  deleteFromCart(id: number): Observable<unknown> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url)
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 409) {
      alert("This product is already in your cart.");
      return throwError('This product is already in your favorites.');
    } else {
      return throwError('An unknown error occurred.');
    }
  }
}
