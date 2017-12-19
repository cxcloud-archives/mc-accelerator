import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentUserService } from './core/auth/current-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(
    private router: Router,
    public currentUserService: CurrentUserService
  ) {}

  ngOnInit() {
    if (!this.currentUserService.isLoggedIn) {
      this.router.navigateByUrl('/login');
    }
  }
}
