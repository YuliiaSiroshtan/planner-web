import { Component, OnInit } from "@angular/core";
import { AllApiService } from "../../services/all-api.service";
import { EntryLoadService } from '../../services/entry-load.service';
import * as FileSaver from 'file-saver';
import { NotifierService } from "angular-notifier";
import { NgxSpinnerService } from "ngx-spinner";
import { TypeNotify } from "src/app/shared/constants/constants";

@Component({
  selector: 'upload-distribution',
  templateUrl: './upload-distribution.component.html',
  styleUrls: ['./upload-distribution.component.scss']
})
export class UploadDistributionComponent implements OnInit {
  file: File;
  displayedColumns: string[] = ['name', 'upload_date', 'active'];
  dataSource = [];

  constructor(
    private _entryLoadService: EntryLoadService,
    private _allApiService: AllApiService,
    private _notifierService: NotifierService,
    private _spinnerService: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.getFileInfo()
  }

  get entryLoadsProperty$() {
    return this._entryLoadService.entryLoadsProperty$;
  }

  uploadFile(data: any) {
    this._spinnerService.show();
    this._entryLoadService.uploadFile(data.target.files[0])
    .subscribe(() =>{
      this._notifierService.notify(TypeNotify.SUCCESS, "File was upload!");
      this.getFileInfo();
      this._spinnerService.hide();
    });
  }

  getFileInfo() {
    this._allApiService.getLoadFileInfo().subscribe((result: any) => {
      if(result.file){
        this.dataSource = [{ name: result.file[0].file_name, upload_date: result.file[1].file_date, active: result.file[2].flag }];
      }
    });
  }

  downloadFile(){
    this._allApiService.downloadLoadFile().subscribe((result) =>{
      FileSaver.saveAs(result, 'nagruzka.xls');
    });
  }
}