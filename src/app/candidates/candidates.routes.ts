import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CandidateComponent } from './components/candidate/candidate.component';
import { FormComponent } from './components/form/form.component';

export const candidatesRoutes: Routes = [
    { path: 'candidatos/candidato/:id', component: CandidateComponent },
    { path: 'candidatos/registro', component: FormComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(candidatesRoutes)],
    exports: [RouterModule]
})
export class CandidatesRoutingModule { }