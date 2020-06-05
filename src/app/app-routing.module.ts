import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '', component: HomeComponent, canActivate: [AuthGuard],
    children: [
      { path: 'candidatos', loadChildren: () => import('./modules/candidates/candidates.module').then(m => m.CandidatesModule) },
      { path: 'procesos', loadChildren: () => import('./modules/employments/employments.module').then(m => m.HiringProcessesModule) },
      { path: 'reportes', loadChildren: () => import('./modules/reports/reports.module').then(m => m.ReportsModule) },
      { path: 'administracion', loadChildren: () => import('./modules/administration/administration.module').then(m => m.AdministrationModule) }
    ]
  },
  { path: 'login', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
