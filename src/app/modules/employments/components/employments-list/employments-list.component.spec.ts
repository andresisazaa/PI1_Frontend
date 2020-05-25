import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentsListComponent } from './employments-list.component';

describe('EmploymentsListComponent', () => {
  let component: EmploymentsListComponent;
  let fixture: ComponentFixture<EmploymentsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmploymentsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploymentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
