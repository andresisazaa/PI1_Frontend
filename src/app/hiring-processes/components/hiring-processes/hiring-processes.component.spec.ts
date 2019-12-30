import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiringProcessesComponent } from './hiring-processes.component';

describe('HiringProcessesComponent', () => {
  let component: HiringProcessesComponent;
  let fixture: ComponentFixture<HiringProcessesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiringProcessesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiringProcessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
