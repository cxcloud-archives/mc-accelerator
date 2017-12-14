import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {
  @Input('header') header: string;
  @Input('icon') icon = 'mdi-check-circle-outline';
  constructor() {}

  ngOnInit() {}
}
