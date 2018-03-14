import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SlydesUploadComponent } from './components/slydes-upload/slydes-upload.component';
import { AuthGuard } from '../../auth/auth.guard';


const routes: Routes = [
  { path: 'home', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'upload', component: SlydesUploadComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class DashboardRouting { }
