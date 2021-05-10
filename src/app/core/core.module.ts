import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { UserListDataService } from './models/user-list-data.service';
import { NDRDataService } from './services/ndr-data.service';
import { PublicationDataService } from './services/publication-data.service';
import { ReportDataService } from './services/report-data.service';
import { IndivPlanDataService } from './services/indiv-plan-data.service';
import { DistributionDataService } from './services/distribution-data.service';
import { EntryLoadService } from './services/entry-load.service';
import { DesciplineService } from './services/descipline.service';
import { AccountService } from './services/account.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatOptionModule, MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HomeComponent } from './components/home-component/home.component';
import { AddUpdateUserComponent } from './components/add-update-user-component/add-update-user.component';
import { UserListComponent } from './components/user-list-component/user-list.component';
import { NDRComponent } from './components/ndr-component/ndr.component';
import { PublicationComponent } from './components/publication-component/publication.component';
import { AppDashboardComponent } from './components/app-dashboard-component/app.dashboard.component';
import { ReportComponent } from './components/report-component/report.component';
import { AddEditPublicationComponent } from './components/add-edit-publication-component/add-edit-publication.component';
import { PublicationListComponent } from './components/publication-list-component/publication-list.component';
import { TrainingJobComponent } from './components/training-job-component/training.job.component';
import { PlanManagementComponent } from './components/plan-management-component/plan.management.component';
import { PlanMethodicalWorkComponent } from './components/plan-methodical-work-component/plan.methodical.work.component';
import { PlanScientificWorkComponent } from './components/plan-scientific-work-component/plan.scientific.work.component';
import { UploadDistributionComponent } from './components/upload-distribution-component/upload-distribution.component';
import { DistributionComponent } from './components/distribution-component/distribution.component';
import { DayEntryComponent } from './components/day-entry-component/day-entry.component';
import { HomePageComponent } from './conteiners/home-page/home-page.component';
import { TeacherEntryLoadComponent } from './conteiners/teacher-entry-load/teacher-entry-load.component';

import { SharedModule } from '../shared/shared.module';
import { UserService } from './services/user.service';
import { LoadDistributionComponent } from './conteiners/load-distribution/load-distribution.component';

@NgModule({
  declarations: [
    HomeComponent,
    AddUpdateUserComponent,
    UserListComponent,
    NDRComponent,
    PublicationComponent,
    AppDashboardComponent,
    ReportComponent,
    AddEditPublicationComponent,
    PublicationListComponent,
    TrainingJobComponent,
    PlanManagementComponent,
    PlanMethodicalWorkComponent,
    PlanScientificWorkComponent,
    UploadDistributionComponent,
    DistributionComponent,
    DayEntryComponent,
    HomePageComponent,
    TeacherEntryLoadComponent,
    LoadDistributionComponent
  ],
  imports: [
    CoreRoutingModule,
    CommonModule,
    SharedModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatRippleModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatOptionModule,
    MatSelectModule,
    MatTableModule,
    MatMenuModule,
    MatButtonModule,

  ],
  exports: [
    SharedModule
  ],
  providers:
    [
      { provide: UserListDataService, useClass: UserListDataService },
      { provide: NDRDataService, useClass: NDRDataService },
      { provide: PublicationDataService, useClass: PublicationDataService },
      { provide: ReportDataService, useClass: ReportDataService },
      { provide: IndivPlanDataService, useClass: IndivPlanDataService },
      { provide: DistributionDataService, useClass: DistributionDataService },
      EntryLoadService,
      DesciplineService,
      AccountService,
      UserService
    ]
})
export class CoreModule { }
