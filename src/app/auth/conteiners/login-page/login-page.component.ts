import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { LoginModel } from '../../models/auth.models';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { TypeNotify } from 'src/app/shared/constants/constants';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'pl-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  submitted: boolean;

  userform = this._fromBuild.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });
  
  constructor(
    private _fromBuild: FormBuilder,
    private _authenticationService: AuthenticationService,
    private _router: Router,
    private _notifierService: NotifierService,
    private _spinnerService: NgxSpinnerService
    ) { }

   get user() { return this.userform.controls; }

  onSubmit(){
    if (this.userform.invalid) {
      console.log(this.userform);
      this.userform.markAsTouched();
      console.log(this.userform);
      return;
    }

    this._spinnerService.show();
    this._authenticationService
      .login({
        email: this.user.email.value,
        password: this.user.password.value
      } as LoginModel)
      .subscribe(res => {
        if (res.access_token) {
          this._spinnerService.hide();
          this._router.navigate(['home']);
        } 
      }, err =>{
        this._spinnerService.hide();
        this._notifierService.notify(TypeNotify.ERROR, err.error.Error);
      });
  }
}
