import { Component, OnInit, Input } from '@angular/core';
import { LineItem } from '@cxcloud/ct-types/carts';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent implements OnInit {
  @Input() item: LineItem;

  constructor() {}

  ngOnInit() {}
}
