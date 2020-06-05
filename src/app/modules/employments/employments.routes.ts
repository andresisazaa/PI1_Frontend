import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { EmploymentsComponent } from './pages/employments/employments.component';
import { EmploymentsListComponent } from './components/employments-list/employments-list.component';
import { EmploymentComponent } from './components/employment/employment.component';
import { NewEmploymentComponent } from './components/new-employment/new-employment.component';

export const employmentsRoutes: Routes = [
  {
    path: '', component: EmploymentsComponent, children:
      [
        { path: '', component: EmploymentsListComponent },
        { path: 'abrir-oferta', component: NewEmploymentComponent },
        { path: ':id', component: EmploymentComponent },
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(employmentsRoutes)],
  exports: [RouterModule]
})
export class EmploymentsRoutingModule { }
