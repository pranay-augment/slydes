import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    public snackBar: MatSnackBar,
    private auth: AuthService

  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.fb.group({
      'email': ['', [ Validators.required, Validators.email ] ],
      'password': ['', [ Validators.required, ] ],
    });
  }

  public formValid:any = true;
  public invalidLogin :any = true;

  login(valid:boolean) {
    if(valid === true) {
    const userDetail = { email: this.loginForm.value['email'],
                         password: this.loginForm.value['password'] };
    this.auth.login(userDetail)
      .subscribe(
      data => {
        if (data.status === 200) {
          this.isLogged(data.item);
        } else {
          this.invalidLogin = false;
        }
      },
      error => {
        console.log('Error:', error)
      });

    } else {
      this.formValid = false;
    }
  }

  isLogged(data) {
    localStorage.setItem('User', JSON.stringify({ user_id:data[0].id }));
   
    this.router.navigate(['home']);
  }


}
