import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { EmploymentsComponent } from './pages/employments/employments.component';

export const employmentsRoutes: Routes = [
    { path: '', component: EmploymentsComponent },
];

@NgModule({
    imports: [RouterModule.forChild(employmentsRoutes)],
    exports: [RouterModule]
})
export class EmploymentsRoutingModule {}
