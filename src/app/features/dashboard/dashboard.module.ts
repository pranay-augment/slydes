// ================== //
// ===== Modules ==== //
// ================== //
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { DashboardRouting } from './dashboard.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { SlideService } from './slide.service';

// ================== //
// === Components === //
// ================== //
import { DashboardComponent } from './dashboard.component';
import { SlydesUploadComponent } from './components/slydes-upload/slydes-upload.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SlydesUploadComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    DashboardRouting
  ],
  providers: [SlideService],
  exports: [
    DashboardComponent
  ]
})

export class DashboardModule { }
