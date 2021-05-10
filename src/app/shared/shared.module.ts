import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';

// import { MatOptionModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
// import { MatRippleModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UtilsService } from './services/utils.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { MatOptionModule, MatRippleModule } from '@angular/material/core';
import { UserListDataService } from '../core/models/user-list-data.service';
import { NDRDataService } from '../core/services/ndr-data.service';
import { PublicationDataService } from '../core/services/publication-data.service';
import { ReportDataService } from '../core/services/report-data.service';
import { IndivPlanDataService } from '../core/services/indiv-plan-data.service';
import { DistributionDataService } from '../core/services/distribution-data.service';
import { EntryLoadService } from '../core/services/entry-load.service';
import { DesciplineService } from '../core/services/descipline.service';
import { AccountService } from '../core/services/account.service';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { NgxSpinnerModule } from 'ngx-spinner';

/**
 * Custom angular notifier options
 */
const customNotifierOptions: NotifierOptions = {
  position: {
		horizontal: {
			position: 'middle',
			distance: 12
		},
		vertical: {
			position: 'top',
			distance: 12,
			gap: 10
		}
	},
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};

const MaterialModules = [
  MatSidenavModule,
  MatSelectModule,
  MatTableModule,
  MatMenuModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatOptionModule,
  MatRippleModule,
];

@NgModule({
  declarations: [HeaderComponent, FooterComponent, MenuComponent],
  imports: [
    NotifierModule.withConfig(customNotifierOptions),
    NgxSpinnerModule,
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModules
  ],
  exports: [
    NotifierModule,
    NgxSpinnerModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HeaderComponent,
    FooterComponent, 
    MenuComponent,
    MaterialModules
  ],
  providers: [
    UtilsService,
    { provide: UserListDataService, useClass: UserListDataService },
    { provide: NDRDataService, useClass: NDRDataService },
    { provide: PublicationDataService, useClass: PublicationDataService },
    { provide: ReportDataService, useClass: ReportDataService },
    { provide: IndivPlanDataService, useClass: IndivPlanDataService },
    { provide: DistributionDataService, useClass: DistributionDataService },
    EntryLoadService,
    DesciplineService,
    AccountService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
