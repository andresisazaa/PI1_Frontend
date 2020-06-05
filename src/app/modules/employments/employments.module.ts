import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EmploymentsRoutingModule } from "./employments.routes";
import { SharedModule } from "../../shared/shared.module";

import { EmploymentsComponent } from "./pages/employments/employments.component";
import { EmploymentFormComponent } from "./components/employment-form/employment-form.component";
import { EmploymentsListComponent } from './components/employments-list/employments-list.component';
import { EmploymentComponent } from './components/employment/employment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { NewEmploymentComponent } from './components/new-employment/new-employment.component';

@NgModule({
  declarations: [EmploymentsComponent, EmploymentFormComponent, EmploymentsListComponent, EmploymentComponent, NewEmploymentComponent],
  imports: [
    CommonModule,
    EmploymentsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
})
export class HiringProcessesModule { }
