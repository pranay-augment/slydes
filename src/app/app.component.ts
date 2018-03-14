import { Component } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // ====================== //
  // === View Variables === //
  // ====================== //
  isLoggedIn$: Observable<boolean>;

  constructor(private authService: AuthService,
    private router: Router) { }

  // ====================== //
  // ==== View Methods ==== //
  // ====================== //
  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }
}
