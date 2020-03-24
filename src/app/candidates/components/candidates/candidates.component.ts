import { Component, OnInit } from '@angular/core';
import { CandidatesService } from '../../services/candidates.service';
import { Candidate } from '../../models/candidate.model';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent implements OnInit {

  candidates: Candidate[] = [];

  constructor(private candidatesService: CandidatesService) { }

  ngOnInit() {
    this.candidatesService.getCandidates()
      .subscribe(candidates => {
        this.candidates = candidates;
      }, error => {
        console.error(error);
        console.log('No se pudieron obtener los candidatos');
      });
  }

}
