import { environment } from '../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import {
  AnonymousSignInResult,
  TokenizedSignInResult,
  CustomerSignupDraft,
  OAuthToken
} from '@cxcloud/ct-types/customers';
import { CurrentUserService } from './current-user.service';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient,
    private storage: LocalStorageService,
    private currentUserService: CurrentUserService,
    private router: Router
  ) {
    const token = this.storage.retrieve('token');
  }

  private handleSignIn(token: OAuthToken, env: string) {
    // this.currentUserService.customer.next('resp.customer');
    this.currentUserService.token.next(token);
    this.currentUserService.environment.next(env);
  }

  public login(username: string, password: string, env: string) {
    return this.http
      .post<OAuthToken>('/admin/auth/login', { username, password })
      .do(resp => this.handleSignIn(resp, env));
  }

  public logout() {
    this.currentUserService.token.next(null);
    // this.currentUserService.customer.next(null);
    this.currentUserService.environment.next(null);
    this.router.navigateByUrl('/login');
  }
}
