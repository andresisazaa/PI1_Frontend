import { Component, OnInit } from '@angular/core';
import { Candidate } from '../../models/candidate.model';
import { ActivatedRoute } from '@angular/router';
import { CandidatesService } from '../../services/candidates.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {
  candidate: Candidate;
  id: number;
  constructor(private activatedRoute: ActivatedRoute,
    private candidatesService: CandidatesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.id = Number(params['id']);
      this.candidate = this.candidatesService.candidates.find(candidate => candidate.id === this.id);
    })
  }
}
