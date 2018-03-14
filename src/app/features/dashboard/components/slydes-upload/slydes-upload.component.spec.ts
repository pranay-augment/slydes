import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlydesUploadComponent } from './slydes-upload.component';

describe('SlydesUploadComponent', () => {
  let component: SlydesUploadComponent;
  let fixture: ComponentFixture<SlydesUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlydesUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlydesUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
