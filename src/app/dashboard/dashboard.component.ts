import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentUserService } from '../core/auth/current-user.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(
    private router: Router,
    private currentUserService: CurrentUserService
  ) {}

  ngOnInit() {
    if (!this.currentUserService.isLoggedIn) {
      this.router.navigateByUrl('');
    }
  }
}
