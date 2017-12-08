import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private currentEnv = localStorage.getItem('env') || 'dev';
  private envs = [
    { key: 'dev-shop', name: 'Development' },
    { key: 'test-shop', name: 'Testing' },
    { key: 'shop', name: 'Production' }
  ];

  constructor() {}

  ngOnInit() {}
}
