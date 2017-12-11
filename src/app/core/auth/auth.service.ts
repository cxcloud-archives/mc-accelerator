import { environment } from '../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import {
  AnonymousSignInResult,
  TokenizedSignInResult,
  CustomerSignupDraft
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

  private handleSignIn(resp: TokenizedSignInResult, env: string) {
    this.currentUserService.customer.next(resp.customer);
    this.currentUserService.token.next(resp.token);
    this.currentUserService.environment.next(env);
  }

  public login(username: string, password: string, env: string) {
    return this.http
      .post<TokenizedSignInResult>('/auth/login', { username, password })
      .do(resp => this.handleSignIn(resp, env))
      .map(resp => resp.customer);
  }

  public logout() {
    this.router.navigateByUrl('/');
  }
}
