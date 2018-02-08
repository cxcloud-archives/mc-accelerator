import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, CurrentUserService } from '../core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  envs: Array<any> = [
    { key: 'dev-shop', name: 'Development' },
    { key: 'test-shop', name: 'Testing' },
    { key: 'shop', name: 'Production' }
  ];
  error = { status: false, message: '' };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private currentUserService: CurrentUserService
  ) {}

  ngOnInit() {
    if (this.currentUserService.isLoggedIn) {
      this.router.navigateByUrl('/');
    }
    this.loginForm = this.formBuilder.group({
      environment: [this.envs[0].key, Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.error.status = false;

      const username = this.loginForm.get('username').value;
      const password = this.loginForm.get('password').value;
      const env = this.loginForm.get('environment').value;

      this.authService.login(username, password, env).subscribe(resp => {
        if (this.currentUserService.isLoggedIn) {
          this.router.navigateByUrl('/');
        } else {
          this.error.status = true;
          this.error.message = resp['message'] ? resp['message'] : '';
        }
      });
    } else {
      this.getError();
    }
  }

  getError() {
    const usernameControl = this.loginForm.get('username');
    const passwordControl = this.loginForm.get('password');
    this.error.status =
      (!usernameControl.pristine && usernameControl.invalid) ||
      (!passwordControl.pristine && passwordControl.invalid);
    this.error.message = 'Invalid user name or password';
  }
}
