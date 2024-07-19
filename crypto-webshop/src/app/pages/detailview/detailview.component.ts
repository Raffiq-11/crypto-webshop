import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import { Product } from '../../models/product.model';
import {ProductComponent} from "../../service/product/product.component";

@Component({
  selector: 'app-detailview',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './detailview.component.html',
  styleUrl: './detailview.component.css'
})
export class DetailviewComponent implements OnInit{

  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductComponent
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(id).subscribe((data: Product) => {
      this.product = data;
    });
  }

}
