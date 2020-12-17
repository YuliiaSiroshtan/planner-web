import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, map } from 'rxjs/operators';
import { environment } from "src/environments/environment";
import { LoginModel } from '../models/auth.models';
import { TypeNotify } from 'src/app/shared/constants/constants';
import { NotifierService } from 'angular-notifier';
import { of } from 'rxjs';

@Injectable()
export class AuthenticationService {
  private tokenResult: any;

  get isLoggin(){
    return !!this.getToken();
  }
  
  constructor(
    private _http: HttpClient,  
    private _notifierService: NotifierService) { }

  login(loginModel: LoginModel) {
    return this._http.post(`${environment.apiPythonBaseUrl}login`, loginModel)
    .pipe(map(result => {
      this.tokenResult = result;
      if(this.tokenResult.access_token){
        localStorage.setItem('tokenInfo', this.tokenResult.access_token);
      }
      return this.tokenResult;
    }));
  }

  getToken() {
    return localStorage.getItem('tokenInfo');
  }
}
