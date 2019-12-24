import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CandidatesComponent } from './components/candidates/candidates.component';
import { CandidateComponent } from './components/candidate/candidate.component';

const routes: Routes = [
    { path: 'candidatos', component: CandidatesComponent },
    { path: 'candidato', component: CandidateComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CandidatesRoutingModule {}
