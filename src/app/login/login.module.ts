// ================== //
// ===== Modules ==== //
// ================== //
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRouting } from './login.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    LoginComponent,
  
  ],
  imports: [
    CommonModule,
    LoginRouting,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    LoginComponent,
  
  ],
  providers: []
})

export class LoginModule {}
