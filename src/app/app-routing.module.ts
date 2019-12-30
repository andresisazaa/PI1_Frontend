import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidatesComponent } from './candidates/components/candidates/candidates.component';
import { candidatesRoutes } from './candidates/candidates.routes';
import { ReportsComponent } from './reports/components/reports/reports.component';
import { reportsRoutes } from './reports/reports.routes';
import { HiringProcessesComponent } from './hiring-processes/components/hiring-processes/hiring-processes.component';
import { hiringProcessesRoutes } from './hiring-processes/hiring-processes.routes';


const routes: Routes = [
  { path: 'candidatos', component: CandidatesComponent, children: [...candidatesRoutes] },
  { path: 'procesos', component: HiringProcessesComponent, children: [...hiringProcessesRoutes] },
  { path: 'reportes', component: ReportsComponent, children: [...reportsRoutes] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
