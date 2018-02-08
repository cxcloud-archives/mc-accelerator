import { environment } from '../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { OAuthToken } from '@cxcloud/ct-types/customers';
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

  private handleSignIn(token: OAuthToken, username: string, env: string) {
    this.currentUserService.token.next(token);
    this.currentUserService.username.next(username);
    this.currentUserService.environment.next(env);
  }

  public login(username: string, password: string, env: string) {
    return this.http
      .post<OAuthToken>('/admin/auth/login', { username, password })
      .do(resp => {
        return resp.access_token
          ? this.handleSignIn(resp, username, env)
          : resp;
      });
  }

  public logout() {
    this.currentUserService.token.next(null);
    this.currentUserService.username.next(null);
    this.currentUserService.environment.next(null);
    this.router.navigateByUrl('/login');
  }
}
