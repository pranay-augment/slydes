import { Component, OnInit } from '@angular/core';
import { GlobalVariable } from '../../globalConfig';
import { Observable } from "rxjs/Observable";
import { ObservableMedia } from '@angular/flex-layout';
import { SlideService } from './slide.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Routes, Router, RouterModule, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import "rxjs/add/operator/takeWhile";
import "rxjs/add/operator/startWith";
import "rxjs/add/operator/map";
import "rxjs/add/observable/of";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public cols: Observable<number>;
  public rows: Observable<String>;
  public rowheight : any;
  public innerWidth : any;
  public element : any;
  user:any = localStorage.getItem('User');
  baseApiUrl:any;
  data:any;

  constructor(
    private observableMedia: ObservableMedia,
    private router: Router,
    private slide_service: SlideService,
  ) { 
    this.element = (window.screen.width);
    this.calculateWidth();
  }

  ngOnInit() {
    this.baseApiUrl = GlobalVariable.BASE_API_URL;
    this.getUserSlides();

    const grid = new Map([
      ["xs", 1],
      ["sm", 2],
      ["md", 3],
      ["lg", 4],
      ["xl", 5]
  ]);
   let start: number;
    grid.forEach((cols, mqAlias) => {
        if (this.observableMedia.isActive(mqAlias)) {
            start = cols;
        }
    });
    this.cols = this.observableMedia.asObservable()
    .map(change => {
      console.log(change);
      console.log(grid.get(change.mqAlias));
      return grid.get(change.mqAlias);
    })
    .startWith(start);
  }

  onResize(event) {
    this.element = event.target.innerWidth;
    this.calculateWidth();
  }

  calculateWidth()
  {
  
  if (this.element < 799) {
    this.rowheight = '400px';
  }
  if (this.element < 730) {
    this.rowheight = '364px';
  }
  if (this.element < 760) {
    this.rowheight = '382px';
  }
  if (this.element < 700) {
    this.rowheight = '364px';
  }
  if (this.element < 620) {
    this.rowheight = '342px';
  }
  if (this.element < 600) {
    this.rowheight = '518px';
  }
  if (this.element < 560) {
    this.rowheight = '496px';
  }
  if (this.element < 520) {
    this.rowheight = '466px';
  }
  if (this.element < 480) {
    this.rowheight = '440px';
  }
  if (this.element < 440) {
    this.rowheight = '414px';
  }
  if (this.element < 400) {
    this.rowheight = '392px';
  }
  if (this.element < 361) {
    this.rowheight = '364px';
  }
  if (this.element < 340) {
    this.rowheight = '352px';
  }
  
  if (this.element > 799) {
    this.rowheight = '412px';
  }
  if (this.element > 849) {
    this.rowheight = '430px';
  }
  if (this.element > 900) {
    this.rowheight = '444px';
  }
  if (this.element > 959) {
    this.rowheight = '364px';
  }
  if (this.element > 1024) {
    this.rowheight = '384px';
  }
  if (this.element > 1099) {
    this.rowheight = '410px';
  }
  if (this.element > 1299) {
    this.rowheight = '364px';
  }
  if (this.element > 1399) {
    this.rowheight = '390px';
  }
  if (this.element > 1530) {
    this.rowheight = '430px';
  }
  if (this.element > 1749) {
    this.rowheight = '450px';
  }
  if (this.element > 1920) {
    this.rowheight = '402px';
  }
  }

  getUserSlides() {
    const user = JSON.parse(this.user);
    console.log(user.User_id);
    this.slide_service.getAllUserSlides(user.user_id).subscribe(res=> {
      this.data = res.item;
      console.log(this.data);
    })
  }

}
