import { Component } from '@angular/core';
import { Candidate } from 'src/app/shared/models/candidate.model';
import { CandidatesService } from 'src/app/core/services/candidates.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-candidate',
  templateUrl: './new-candidate.component.html',
  styleUrls: ['./new-candidate.component.scss']
})
export class NewCandidateComponent {

  constructor(private candidatesService: CandidatesService, private snackBar: MatSnackBar) { }

  createCandidate(candidate: Candidate) {
    this.candidatesService.createCandidate(candidate)
      .subscribe(createdCandidate => {
        this.openMessage('¡Candidato agregado correctamente!');
      }, ({ error }) => {
        this.openMessage(error.message);
      });
  }

  openMessage(message: string) {
    this.snackBar.open(message, null, { duration: 2000 });
  }

}
