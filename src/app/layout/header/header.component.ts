import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() {}
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
}
