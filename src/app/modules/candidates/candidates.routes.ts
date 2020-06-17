import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CandidateComponent } from './components/candidate/candidate.component';
import { CandidatesComponent } from './pages/candidates/candidates.component';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';

export const candidatesRoutes: Routes = [
  {
    path: '',
    component: CandidatesComponent,
    children: [
      { path: '', component: CandidateListComponent },
      { path: ':id', component: CandidateComponent },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(candidatesRoutes)],
  exports: [RouterModule],
})
export class CandidatesRoutingModule { }
