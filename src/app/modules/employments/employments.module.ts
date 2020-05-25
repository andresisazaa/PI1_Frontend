import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EmploymentsRoutingModule } from "./employments.routes";
import { SharedModule } from "../../shared/shared.module";

import { EmploymentsComponent } from "./pages/employments/employments.component";
import { EmploymentFormComponent } from "./components/employment-form/employment-form.component";
import { EmploymentsListComponent } from './components/employments-list/employments-list.component';
import { EmploymentComponent } from './components/employment/employment.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EmploymentsComponent, EmploymentFormComponent, EmploymentsListComponent, EmploymentComponent],
  imports: [CommonModule, EmploymentsRoutingModule, SharedModule, ReactiveFormsModule],
})
export class HiringProcessesModule { }
