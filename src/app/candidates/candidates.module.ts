import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateComponent } from './components/candidate/candidate.component';
import { CandidatesComponent } from './components/candidates/candidates.component';



@NgModule({
  declarations: [
    CandidateComponent,
    CandidatesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CandidatesModule { }
