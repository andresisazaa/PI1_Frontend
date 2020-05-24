import { Component, OnInit } from '@angular/core';
import { Candidate } from '../../../../shared/models/candidate.model';
import { ActivatedRoute } from '@angular/router';
import { CandidatesService } from 'src/app/core/services/candidates.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {
  candidate: any;
  id: number;
  constructor(private activatedRoute: ActivatedRoute,
              private candidatesService: CandidatesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = Number(params['id']);
      this.candidatesService.getCandidateById(this.id)
        .subscribe(candidate => {
          this.candidate = candidate;
        });
    });
  }
}
