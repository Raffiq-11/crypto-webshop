import {Injectable} from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Favorite} from "../models/favorite";

@Injectable({
  providedIn: 'root'
})


export class FavoritesService {

  private apiUrl = 'http://localhost:8080/api/favorites';

  constructor(private http: HttpClient) {
  }

  addFavorite(favorite: Favorite): Observable<Favorite> {
    console.log("in addfoavirte")
    console.log(favorite)
    return this.http.post<Favorite>(this.apiUrl, favorite).pipe(
      catchError(this.handleError)
    );
  }

  getFavorites(): Observable<Favorite[]> {
    return this.http.get<Favorite[]>(this.apiUrl);
  }

  /** DELETE: delete the hero from the server */
  deleteFromFavorites(id: number): Observable<unknown> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url)
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 409) {
      alert("This product is already in your favorites.");
      return throwError('This product is already in your favorites.');
    } else {
      return throwError('An unknown error occurred.');
    }
  }
}
