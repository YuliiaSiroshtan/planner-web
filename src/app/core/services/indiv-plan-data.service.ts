import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpParams } from "@angular/common/http";
import { TrainingJobModel, IndivPlanFieldsValueModel } from "../models/ind-plan.models";
import { environment } from 'src/environments/environment';

@Injectable()
export class IndivPlanDataService {
  constructor(private http: HttpClient) { }

  updateTrainingJob(trainingJob: TrainingJobModel) {
    return this.http.post(environment.apiBaseUrl + '/api/IndividualPlan/UpdateTrainingJob', trainingJob);
  }

  getTrainingJob() {
    return this.http.get(environment.apiBaseUrl + '/api/IndividualPlan/GetTrainingJob');
  }

  getIndivPlanField(indPlanTypeId: string) {
    let params = new HttpParams();

    params = params.set('indPlanTypeId', indPlanTypeId);
    return this.http.get(environment.apiBaseUrl + '/api/IndividualPlan/GetIndivPlanField', { params: params });
  }

  getIndivPlanFieldValue() {
    return this.http.get(environment.apiBaseUrl + '/api/IndividualPlan/GetIndivPlanFieldValue');
  }

  updateIndivPlanFieldValue(indivPlanFieldsValue: IndivPlanFieldsValueModel) {
    return this.http.post(environment.apiBaseUrl + '/api/IndividualPlan/UpdateIndivPlanFieldValue', indivPlanFieldsValue);
  }
}
