import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatesRoutingModule } from './candidates.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CandidateComponent } from './components/candidate/candidate.component';
import { CandidatesComponent } from './components/candidates/candidates.component';
import { FormComponent } from './components/form/form.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CandidateComponent,
    CandidatesComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    CandidatesRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [CandidatesComponent, CandidateComponent, FormComponent]
})
export class CandidatesModule { }
