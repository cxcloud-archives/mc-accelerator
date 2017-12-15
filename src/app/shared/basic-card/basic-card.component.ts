import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-basic-card',
  templateUrl: './basic-card.component.html',
  styleUrls: ['./basic-card.component.scss']
})
export class BasicCardComponent implements OnInit {
  @Input('header') header: string;
  @Input('data') data: any;
  constructor() {}

  ngOnInit() {}
}
