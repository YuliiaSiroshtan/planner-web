import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { take, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AccountService {
  user$: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );

  constructor(private _http: HttpClient) {}

  getUser(){
    this._http.get(environment.apiPythonBaseUrl + 'profile').pipe(take(1),
    map((response: any) =>{
      this.user$.next(response);
      localStorage.setItem('role', response.role);
      localStorage.setItem('gid', response.science_title);
    })).subscribe();
  }
}
