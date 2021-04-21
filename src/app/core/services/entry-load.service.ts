import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { take, map, catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, of } from 'rxjs';
import {
  EntryLoadsPropertyViewModel,
  UserEntryLoadsPropertyViewModel
} from '../models/entry-load.models';
import { TypeNotify } from 'src/app/shared/constants/constants';
import { NotifierService } from 'angular-notifier';

@Injectable()
export class EntryLoadService {
  entryLoadsProperty$: BehaviorSubject<
    EntryLoadsPropertyViewModel[]
  > = new BehaviorSubject<EntryLoadsPropertyViewModel[]>([]);

  userEntryLoadsProperty$: BehaviorSubject<
    UserEntryLoadsPropertyViewModel[]
  > = new BehaviorSubject<UserEntryLoadsPropertyViewModel[]>([]);

  constructor(
    private _http: HttpClient,
    private _notifierService: NotifierService
    ) {}

  uploadEntryLoadProperties() {
    this._http
      .get(environment.apiBaseUrl + 'api/EntryLoad/GetEntryLoadProperties')
      .pipe(
        take(1),
        map((response: EntryLoadsPropertyViewModel[]) => {
          this.entryLoadsProperty$.next(response);
        })
      )
      .subscribe();
  }

  uploadUserEntryLoadPropertiesByUserId(userId: number) {
    this._http
      .get(
        environment.apiBaseUrl +
          'api/EntryLoad/GetUserEntryLoadPropertiesByUserId?userId=' +
          userId
      )
      .pipe(
        take(1),
        map((response: UserEntryLoadsPropertyViewModel[]) => {
          this.userEntryLoadsProperty$.next(response);
        })
      )
      .subscribe();
  }

  makeAnEntryLoadPlan(userId: number) {
    this._http
      .post(environment.apiBaseUrl + 'api/EntryLoad/MakeAnEntryLoadPlan', {userId: userId})
      .pipe(take(1))
      .subscribe();
  }

  updateEntryLoadFile(id: number) {
    this._http
      .post(environment.apiBaseUrl + 'api/EntryLoad/UpdateEntryLoadFile', id)
      .pipe(take(1))
      .subscribe();
  }

  deleteEntryLoadFile(id: number) {
    this._http
      .post(environment.apiBaseUrl + 'api/EntryLoad/DeleteEntryLoadFile', id)
      .pipe(take(1))
      .subscribe(
        () => {},
        err => console.log(err)
      );
  }

  deleteUserEntryLoadFile(id: number) {
    this._http
      .post(environment.apiBaseUrl + 'api/EntryLoad/DeleteUserEntryLoadFile', id)
      .pipe(
        take(1),
        catchError(err => of(console.log(err)))
      )
      .subscribe();
  }

  downloadFile(id: number) {
    this._http
      .get(environment.apiBaseUrl + 'api/EntryLoad/DownloadFile?id=' + id)
      .pipe(
        take(1),
        map(response => {
          console.log(response);
        }),
        catchError(err => of(console.log(err)))
      )
      .subscribe();
  }

  uploadFile(file: File) {
    let formData: FormData = new FormData();
    formData.append('file', file);
    this._http
      .post(`${environment.apiPythonBaseUrl}uploader`, formData)
      .pipe(
        take(1),
        tap(()=>{
          this._notifierService.notify(TypeNotify.SUCCESS, "File was upload!");
        }),
        catchError(err => of(console.log(err)))
      )
      .subscribe();
  }
}
