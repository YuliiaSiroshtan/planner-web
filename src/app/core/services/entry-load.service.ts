import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { take, catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, of } from 'rxjs';
import { TypeNotify } from 'src/app/shared/constants/constants';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class EntryLoadService {
  entryLoadsProperty$: BehaviorSubject<
    any[]
  > = new BehaviorSubject<any[]>([]);

  userEntryLoadsProperty$: BehaviorSubject<
    any[]
  > = new BehaviorSubject<any[]>([]);

  constructor(
    private _http: HttpClient,
    private _notifierService: NotifierService,
    private _spinnerService: NgxSpinnerService
    ) {}

  uploadFile(file: File) {
    let formData: FormData = new FormData();
    formData.append('file', file);
    return this._http
      .post(`${environment.apiPythonBaseUrl}uploader`, formData)
      .pipe(
        take(1),
        catchError(err => of(console.log(err)))
      );
  }
}
