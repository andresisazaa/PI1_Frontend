import { Component, OnInit } from '@angular/core';
import { Candidate } from '../../../../shared/models/candidate.model';
import { CandidatesService } from 'src/app/core/services/candidates.service';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss']
})
export class CandidateListComponent implements OnInit {
  candidates = [];
  loadingCandidates: boolean;
  constructor(private candidatesService: CandidatesService) { }

  ngOnInit(): void {
    this.getCandidates();
  }

  getCandidates(): void {
    this.loadingCandidates = true;
    this.candidatesService.getCandidates()
      .subscribe(candidates => {
        this.loadingCandidates = false;
        this.candidates = candidates;
      }, error => {
        this.loadingCandidates = false;
        console.log('No se pudieron obtener los candidatos');
      });
  }
}
