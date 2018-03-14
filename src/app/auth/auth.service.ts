import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions, Response, RequestMethod } from '@angular/http';
import { GlobalVariable } from '../globalConfig';
import { User } from '../models/user';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthService {
  public baseApiUrl = GlobalVariable.BASE_API_URL;
  public baseFolderUrl = GlobalVariable.BASE_FOLDER_URL;

  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    if (localStorage.getItem('User')) {
        this.loggedIn.next(true);
    }
    return this.loggedIn.asObservable();
}


  constructor(
    private http: Http,
    private router: Router
  ) {}

  register(user: User) {
    return this.http.post(this.baseApiUrl + 'user/register', user)
      .share()
      .map(
      (response: Response) => response.json()
      );
  }

  login(userDetail) {
    return this.http.post(this.baseApiUrl + 'user/login', userDetail)
      .share()
      .map((response: Response) => response.json());
  }

  logout() {
    localStorage.removeItem('User');
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

}
