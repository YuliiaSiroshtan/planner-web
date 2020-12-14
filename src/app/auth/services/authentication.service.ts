import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { environment } from "src/environments/environment";
import { LoginModel } from '../models/auth.models';

@Injectable()
export class AuthenticationService {
  private tokenResult: any;

  get isLoggin(){
    return !!this.getToken();
  }
  
  constructor(private _http: HttpClient) { }

  isAuthenticated(login: LoginModel) {
    return this._http.post(`${environment.apiPythonBaseUrl}login`, login)
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
