import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
import { forkJoin } from 'rxjs';
import { TypeNotify } from 'src/app/shared/constants/constants';
import { AllApiService } from '../../services/all-api.service';

@Component({
  selector: 'app-load-page',
  templateUrl: './load-page.component.html',
  styleUrls: ['./load-page.component.scss']
})
export class LoadPageComponent implements OnInit {
  stavkaHour = 480;
  rate = 0;
  teachers = [];
  groups = [];
  lessons = [];
  selectedTeacher: string;
  selectedLesson: string;
  selectedGroup: string;
  lectureHours = 0;
  practiceHours = 0;
  labHours = 0;

  constructor(
    private _allApiSerice: AllApiService,
    private _notifierService: NotifierService,
    private _spinnerService: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.getTeachers();
    // this.getHours();
  }

  getTeachers() {
    this._allApiSerice.getTeachers().subscribe((result: any) => {
      this.teachers = result.teachers;
    });
  }

  getHours() {
    this._allApiSerice.getHours().subscribe((result: any) => {
      console.log(result);
      this.lessons = result;
    });
  }

  getStudents() {
    this._allApiSerice.getStudents(this.selectedLesson).subscribe((result: any) => {
      this.groups = result;
    });
  }

  changeTeacher(event: any){
    this._allApiSerice.getHoursTeachers(this.selectedTeacher).subscribe((res) =>{
      console.log(res);
    });
  }

  changedLesson(event: any) {
    if (!this.selectedLesson) return;
    this.getStudents();
  }

  saveRate(){
    this._allApiSerice.saveRate(this.selectedTeacher, this.rate, localStorage.getItem('gid')).subscribe();
  }

  save() {
    if (!this.selectedTeacher ||
      !this.selectedLesson ||
      !this.selectedGroup 
      // !this.lectureHours ||
      // !this.labHours ||
      // !this.practiceHours
      ) {
      this._notifierService.notify(TypeNotify.ERROR, "Введіть всі необхідні данні!");
      return;
    }

    this._spinnerService.show();
    forkJoin<any, any, any>(
      this._allApiSerice.saveLoadHours(
        this.selectedTeacher,
        this.selectedLesson,
        1,
        this.selectedGroup,
        this.lectureHours
      ), this._allApiSerice.saveLoadHours(
        this.selectedTeacher,
        this.selectedLesson,
        2,
        this.selectedGroup,
        this.labHours
      ),
      this._allApiSerice.saveLoadHours(
        this.selectedTeacher,
        this.selectedLesson,
        3,
        this.selectedGroup,
        this.practiceHours
      )
    ).subscribe(() => {
      this._spinnerService.hide();
      this._notifierService.notify(TypeNotify.SUCCESS, "Дані успішно збережені!");
    });
  }
}
