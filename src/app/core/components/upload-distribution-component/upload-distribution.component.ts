import { Component, OnInit } from "@angular/core";
import { EntryLoadService } from '../../services/entry-load.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'upload-distribution',
  templateUrl: './upload-distribution.component.html',
  styleUrls: ['./upload-distribution.component.scss']
})
export class UploadDistributionComponent implements OnInit {
  displayedColumns: string[] = ['name', 'dateTime', 'hoursPerRate', 'isActive', 'action'];
  file: File;

  hoursEntryLoad: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _entryLoadService: EntryLoadService) {
  }

  ngOnInit() {
  }

  get entryLoadsProperty$() {
    return this._entryLoadService.entryLoadsProperty$;
  }

  choseFile(id: number) {
    // this._entryLoadService.updateEntryLoadFile(id);
  }

  async uploadFile(data) {
    this.file = data.files[0];
    this._entryLoadService.uploadFile(this.file);
    this.file = null;
  }
}
