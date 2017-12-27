import { Component, OnInit, Input } from '@angular/core';
import { Product } from '@cxcloud/ct-types/products';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent implements OnInit {
  @Input() product: Product;

  constructor() {}

  ngOnInit() {}
}
