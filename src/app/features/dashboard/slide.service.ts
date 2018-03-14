import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestMethod } from '@angular/http';
import { GlobalVariable } from '../../globalConfig';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';

@Injectable()
export class SlideService {
  public baseApiUrl = GlobalVariable.BASE_API_URL;
  public baseFolderUrl = GlobalVariable.BASE_FOLDER_URL;

  constructor(
    private http: Http) {}

  getAllUserSlides(user_id) {
    return this.http.get(this.baseApiUrl + 'slide/user_slides/'+user_id)
      .share()
      .map(
      (response: Response) => response.json()
      );
  }




}
