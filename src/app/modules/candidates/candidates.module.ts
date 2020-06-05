import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatesRoutingModule } from './candidates.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';

import { CandidatesComponent } from './pages/candidates/candidates.component';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';
import { CandidateFormComponent } from './components/candidate-form/candidate-form.component';
import { CandidateComponent } from './components/candidate/candidate.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NewCandidateComponent } from './components/new-candidate/new-candidate.component';
@NgModule({
  declarations: [
    CandidateComponent,
    CandidatesComponent,
    CandidateFormComponent,
    CandidateListComponent,
    NewCandidateComponent,
  ],
  imports: [
    CommonModule,
    CandidatesRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
})
export class CandidatesModule { }
