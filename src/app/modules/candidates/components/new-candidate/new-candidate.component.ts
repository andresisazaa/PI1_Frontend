import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/shared/models/candidate.model';
import { CandidatesService } from 'src/app/core/services/candidates.service';

@Component({
  selector: 'app-new-candidate',
  templateUrl: './new-candidate.component.html',
  styleUrls: ['./new-candidate.component.scss']
})
export class NewCandidateComponent implements OnInit {

  constructor(private candidatesService: CandidatesService) { }

  ngOnInit(): void { }

  createCandidate(candidate: Candidate) {
    this.candidatesService.createCandidate(candidate)
      .subscribe(candidate => {
        console.log('CANDIDATO CREADO CORRECTAMENTE', candidate);
      }, error => {
        console.log('OCURRIÓ UN ERROR', error);
      });
  }

}
