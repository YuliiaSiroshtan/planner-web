import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AllApiService {

  constructor(private _http: HttpClient) { }

  getTeachers() {
    return this._http.get(environment.apiPythonBaseUrl + 'teachers').pipe(take(1));
  }

  getHours() {
    return this._http.get(`${environment.apiPythonBaseUrl}hours`).pipe(take(1));
  }

  getLoadFileInfo() {
    return this._http.get(`${environment.apiPythonBaseUrl}file_info`).pipe(take(1));
  }

  downloadLoadFile() {
    return this._http.get(`${environment.apiPythonBaseUrl}download`, { responseType: 'blob' }).pipe(take(1));
  }

  getStudents(lesson: string) {
    return this._http.get(`${environment.apiPythonBaseUrl}student?lesson=${lesson}`).pipe(take(1));
  }


  saveLoadHours(teacher: string, lesson: string, lessonType: number, group: string, hours: number) {
    return this._http.post(`${environment.apiPythonBaseUrl}savepoint`, 
      {
          teacher: teacher,
          lesson: lesson,
          type_lesson: lessonType,
          group: group,
          hours: hours
      }
      ).pipe(take(1));
  }
}
