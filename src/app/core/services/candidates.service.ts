import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Candidate } from 'src/app/shared/models/candidate.model';
@Injectable({
  providedIn: 'root'
})
export class CandidatesService {

  constructor(private http: HttpClient) { }

  getCandidates(): Observable<Candidate[]> {
    return this.http.get(`${environment.backend_URL}/candidates`)
      .pipe(map((res: []) => {
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
    return this.http.get(`${environment.backend_URL}/candidates/${id}`)
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
    return this.http.post(`${environment.backend_URL}/candidates`, { ...candidateData })
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
    return this.http.put(`${environment.backend_URL}/candidates/${candidate.id}`, { ...candidate });
  }

  deleteCandidate(id: string) {
    return this.http.delete(`${environment.backend_URL}/candidates/${id}`);
  }
}
