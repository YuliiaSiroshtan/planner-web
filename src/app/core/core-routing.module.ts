import { HomePageComponent } from './conteiners/home-page/home-page.component';
import { AuthGuard } from './services/auth-guard';
import { UploadDistributionComponent } from './components/upload-distribution-component/upload-distribution.component';
import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoadPageComponent } from './conteiners/load-page/load-page.component';

const routes: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomePageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'upload-distribution',
    component: UploadDistributionComponent,
    canActivate: [AuthGuard],
  },
  {
    path:'load',
    component: LoadPageComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
