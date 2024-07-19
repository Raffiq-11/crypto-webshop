import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {ProductComponent} from "../../service/product/product.component";
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent implements OnInit{

  products: Product[] = [];

  constructor(private productService: ProductComponent) {
  }
  ngOnInit() {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

}
