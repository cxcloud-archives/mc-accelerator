import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../../../core/auth/current-user.service';
import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    private currentUserService: CurrentUserService,
    private authService: AuthService
  ) {}
  navMenu: Array<any> = [
    { title: 'Contentful', link: 'https://www.contentful.com/' },
    { title: 'Algolia', link: 'https://www.algolia.com/' },
    { title: 'Auth0', link: 'https://auth0.com/' }
  ];
  accountMenu: Array<any> = [
    { title: 'My company', link: '#' },
    { title: 'My account', link: '#' },
    { title: 'Logout', link: '#' }
  ];
  ngOnInit() {}

  get currentUser(): any {
    if (this.currentUserService.isLoggedIn) {
      return this.currentUserService.customer.getValue();
    }
    return false;
  }

  logOut() {
    this.authService.logout();
  }
}
