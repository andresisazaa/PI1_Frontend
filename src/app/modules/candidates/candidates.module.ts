import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CandidatesRoutingModule } from "./candidates.routes";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "../../shared/shared.module";

import { CandidatesComponent } from "./pages/candidates/candidates.component";
import { CandidateListComponent } from "./components/candidate-list/candidate-list.component";
import { CandidateFormComponent } from "./components/candidate-form/candidate-form.component";
import { CandidateComponent } from "./components/candidate/candidate.component";

@NgModule({
  declarations: [
    CandidateComponent,
    CandidatesComponent,
    CandidateFormComponent,
    CandidateListComponent,
  ],
  imports: [
    CommonModule,
    CandidatesRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
  ],
})
export class CandidatesModule {}
