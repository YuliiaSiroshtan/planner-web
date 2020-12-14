import { Component, OnInit, Input } from "@angular/core";
import { DayEntryModel } from "../../models/distributions.models";

@Component({
  selector: 'day-entry',
  templateUrl: './day-entry.component.html',
  styleUrls: ['./day-entry.component.scss']
})
export class DayEntryComponent implements OnInit {
  @Input() dayEntry: DayEntryModel[];

  constructor() {
  }

  ngOnInit() {
  }


}
