import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss']
})
export class BasicCardComponent implements OnInit {
  @Input('header') header: string;
  @Input('data') data: any;
  constructor() {}

  ngOnInit() {}
}
