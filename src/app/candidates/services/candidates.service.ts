import { Injectable } from '@angular/core';
import { Candidate } from '../models/candidate.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CandidatesService {
  URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getCandidates(): Observable<Candidate[]> {
    return this.http.get(`${this.URL}/candidates`)
      .pipe(map(res => {
        const candidates: Candidate[] = [];
        Object.keys(res).forEach(key => {
          const { id, name, email, phoneNumber, aspiratedJob, attractionChannel, CVUrl } = res[key];
          const candidate: Candidate = { id, name, email, phoneNumber, aspiratedJob, attractionChannel, CVUrl };
          candidates.push(candidate);
        });
        return candidates;
      }));
  }

  getCandidateById(id: number): Observable<Candidate> {
    return this.http.get(`${this.URL}/candidates/${id}`)
      .pipe(map(res => {
        const id = res['id'];
        const name = res['name'];
        const email = res['email'];
        const phoneNumber = res['phoneNumber'];
        const aspiratedJob = res['aspiratedJob'];
        const attractionChannel = res['attractionChannel'];
        const CVUrl = res['CVUrl'];
        const candidate: Candidate = { id, name, email, phoneNumber, aspiratedJob, attractionChannel, CVUrl };
        return candidate;
      }));
  }

  createCandidate(candidateData: Object): Observable<Candidate> {
    return this.http.post(`${this.URL}/candidates`, { ...candidateData })
      .pipe(map(res => {
        const id = res['id'];
        const name = res['name'];
        const email = res['email'];
        const phoneNumber = res['phoneNumber'];
        const attractionChannel = res['attractionChannel'];
        const CVUrl = res['CVUrl'];
        const candidate: Candidate = { id, name, email, phoneNumber, attractionChannel, CVUrl };
        return candidate;
      }));
  }

  updateCandidate(candidate: Candidate) {
    return this.http.put(`${this.URL}/candidates/${candidate.id}`, { ...candidate });
  }

  deleteCandidate(id: string) {
    return this.http.delete(`${this.URL}/candidates/${id}`);
  }
}
