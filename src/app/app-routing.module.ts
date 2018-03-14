import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { RegisterComponent } from './register/register.component';
//import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' }
  //{ path: '', component: LoginComponent },
  //{ path: 'login', component: LoginComponent },
  //{ path: 'register', component: RegisterComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
