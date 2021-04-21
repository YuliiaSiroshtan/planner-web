import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { take, map, catchError } from 'rxjs/operators';
import { BehaviorSubject, of } from 'rxjs';
import { UserModel } from '../models/user.models';

@Injectable()
export class AccountService {
  user$: BehaviorSubject<UserModel> = new BehaviorSubject<UserModel>(
    null
  );

  constructor(private _http: HttpClient) {}

  getUser(){
    this._http.get(environment.apiPythonBaseUrl + 'profile').pipe(take(1),
    map((response: UserModel) =>{
      this.user$.next(response);
      localStorage.setItem('role', response.role);
    })).subscribe();
  }
}
