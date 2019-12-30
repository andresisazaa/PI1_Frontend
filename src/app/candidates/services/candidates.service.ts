import { Injectable } from '@angular/core';
import { Candidate } from '../models/candidate.model';

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {
  private candidates: Candidate[] = []
  constructor() { }

  saveCandidate(candidate: Candidate) {
    this.candidates.push(candidate);
  }
}
