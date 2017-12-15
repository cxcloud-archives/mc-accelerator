import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pannel',
  templateUrl: './pannel.component.html',
  styleUrls: ['./pannel.component.scss']
})
export class InfoCardComponent implements OnInit {
  @Input('header') header: string;
  @Input('icon') icon = 'mdi-check-circle-outline';
  constructor() {}

  ngOnInit() {}
}
