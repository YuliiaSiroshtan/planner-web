import { Component } from "@angular/core";
import { EntryLoadService } from '../../services/entry-load.service';

@Component({
  selector: 'upload-distribution',
  templateUrl: './upload-distribution.component.html',
  styleUrls: ['./upload-distribution.component.scss']
})
export class UploadDistributionComponent {
  file: File;

  constructor(
    private _entryLoadService: EntryLoadService
    ) { }

  get entryLoadsProperty$() {
    return this._entryLoadService.entryLoadsProperty$;
  }

  uploadFile(data: any) {
    this._entryLoadService.uploadFile(data.target.files[0]);
  }
}