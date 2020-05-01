import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'candidatos', loadChildren: () => import('./modules/candidates/candidates.module').then(m => m.CandidatesModule) },
  { path: 'procesos', loadChildren: () => import('./modules/employments/employments.module').then(m => m.HiringProcessesModule) },
  { path: 'reportes', loadChildren: () => import('./modules/reports/reports.module').then(m => m.ReportsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
