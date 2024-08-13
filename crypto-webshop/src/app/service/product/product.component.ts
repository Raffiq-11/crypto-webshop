import {Component, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from '../../models/product/product.component';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

@Injectable({ providedIn: 'root' })


export class ProductComponent {

  private apiUrl = 'http://localhost:8080/api/products';

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProductByName(name: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${name}`);
  }

}
