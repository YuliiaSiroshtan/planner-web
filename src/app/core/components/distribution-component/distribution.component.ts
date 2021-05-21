import { Component, OnInit } from "@angular/core";
import { DistributionFilterModel, DayEntryModel } from "../../models/distributions.models";
import { DistributionDataService } from "../../services/distribution-data.service";

@Component({
  selector: 'distribution',
  templateUrl: './distribution.component.html',
  styleUrls: ['./distribution.component.scss']
})
export class DistributionComponent implements OnInit {
  index: number;
  filter: DistributionFilterModel;
  years: any[] = [{ label: '2017', value: '2017' }];
  semesters: any[] = [{ label: 'Перший семестр', value: '1' }, { label: 'Другий семестр', value: '1' }];
  dayEntry: DayEntryModel[] = [];

  constructor(private distributionDataService: DistributionDataService) {
  }

  ngOnInit() {
    this.filter = new DistributionFilterModel();
  }

  getDayEntry() {
    this.distributionDataService.getDayDistribution(this.filter)
      .subscribe((result: DayEntryModel[]) => {
        this.dayEntry = result;
      })
  }

  submit() {

  }
}
