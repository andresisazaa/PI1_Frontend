import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { EmploymentsComponent } from './pages/employments/employments.component';
import { EmploymentsListComponent } from './components/employments-list/employments-list.component';
import { EmploymentFormComponent } from './components/employment-form/employment-form.component';
import { EmploymentComponent } from './components/employment/employment.component';

export const employmentsRoutes: Routes = [
  {
    path: '', component: EmploymentsComponent, children:
      [
        { path: '', component: EmploymentsListComponent },
        { path: 'nuevo', component: EmploymentFormComponent },
        { path: ':id', component: EmploymentComponent },
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(employmentsRoutes)],
  exports: [RouterModule]
})
export class EmploymentsRoutingModule { }
