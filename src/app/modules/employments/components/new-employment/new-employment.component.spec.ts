import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEmploymentComponent } from './new-employment.component';

describe('NewEmploymentComponent', () => {
  let component: NewEmploymentComponent;
  let fixture: ComponentFixture<NewEmploymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEmploymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEmploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
