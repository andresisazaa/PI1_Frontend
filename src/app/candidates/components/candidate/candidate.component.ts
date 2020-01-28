import { Component, OnInit, Input } from '@angular/core';
import { Candidate } from '../../models/candidate.model';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {
  @Input() candidate: Candidate;
  constructor() { }
  ngOnInit() {}
}
