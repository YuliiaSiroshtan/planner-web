import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { EntryLoadService } from './services/entry-load.service';
import { AccountService } from './services/account.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatOptionModule, MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UploadDistributionComponent } from './components/upload-distribution-component/upload-distribution.component';
import { HomePageComponent } from './conteiners/home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { LoadPageComponent } from './conteiners/load-page/load-page.component';
import { LoadTeacherPageComponent } from './conteiners/load-teacher-page/load-teacher-page.component';
import { DocumentPageComponent } from './conteiners/document-page/document-page.component';

@NgModule({
  declarations: [
    UploadDistributionComponent,
    HomePageComponent,
    LoadPageComponent,
    LoadTeacherPageComponent,
    DocumentPageComponent
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
    MatMenuModule,
    MatButtonModule,
    MatSelectModule
  ],
  exports: [
    SharedModule
  ],
  providers:
    [
      EntryLoadService,
      AccountService
    ]
})
export class CoreModule { }
