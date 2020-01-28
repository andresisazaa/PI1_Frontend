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
    this.candidates = this.candidatesService.candidates;
  }

}
