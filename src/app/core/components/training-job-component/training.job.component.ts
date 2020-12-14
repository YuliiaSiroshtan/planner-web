import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { MessageService } from "primeng/api";
import { IndivPlanDataService } from "src/app/core/services/indiv-plan-data.service";
import { TrainingJobModel } from '../../models/ind-plan.models';

@Component({
  selector: 'training-job',
  templateUrl: './training.job.component.html',
  styleUrls: ['./training.job.component.scss']
})
export class TrainingJobComponent implements OnInit {
  trainingJob: TrainingJobModel[] = [];

  trainingJobForm: FormGroup;

  constructor(
    private indivPlanDataService: IndivPlanDataService,
    private messageService: MessageService) {
  }

  ngOnInit() {
    this.getTrainingJob();
  }

  getTrainingJob() {
    this.indivPlanDataService.getTrainingJob().subscribe((result: TrainingJobModel[]) => {
      if (result) {
        this.trainingJob = result;
      }
    });
  }

  updateTrainingJob() {
    if (this.trainingJobForm.invalid) return;

    let temptrainingJob = <TrainingJobModel>this.trainingJobForm.value;

    this.indivPlanDataService.updateTrainingJob(temptrainingJob).subscribe(data => {
      if (data) {
        this.trainingJobForm.reset();
        this.getTrainingJob();
        this.messageService.add({ key: 'success', severity: 'success', summary: '', detail: 'Дані навчальної роботи успішно оновлено' });
      } else {
        this.messageService.add({ key: 'error', severity: 'error', summary: '', detail: '' });
      }
    });
  }

}
