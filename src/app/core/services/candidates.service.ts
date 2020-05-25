import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Candidate } from '../../shared/models/candidate.model';
@Injectable({
  providedIn: 'root'
})
export class CandidatesService {
  private URL = `${environment.backend_URL}/candidates`;
  constructor(private http: HttpClient) { }

  getCandidates(): Observable<Candidate[]> {
    return this.http.get(`${this.URL}`)
      .pipe(map((res: Candidate[]) => res));
  }

  getCandidateById(id: number): Observable<Candidate> {
    return this.http.get(`${this.URL}/${id}`)
      .pipe(map((res: Candidate) => res));
  }

  createCandidate(candidate: Candidate): Observable<Candidate> {
    return this.http.post(`${this.URL}`, candidate)
      .pipe(map((res: Candidate) => res));
  }

  updateCandidate(candidate: Candidate): Observable<string> {
    return this.http.put(`${this.URL}/${candidate.id}`, candidate)
      .pipe(map((res: string) => res));
  }

  deleteCandidate(id: number): Observable<string> {
    return this.http.delete(`${this.URL}/${id}`)
      .pipe(map((res: string) => res));
  }
}
