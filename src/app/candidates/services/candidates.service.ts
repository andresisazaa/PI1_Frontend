import { Injectable } from '@angular/core';
import { Candidate } from '../models/candidate.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CandidatesService {
  // URL = 'https://pi1-backend.herokuapp.com';
  URL = 'http://localhost:8080/api/v1';
  // candidates: Candidate[] = [];
  // URL = 'https://pi1-backend.herokuapp.com';
  candidates: Candidate[] = [new Candidate(1, 'Andrés Felipe Isaza Arboleda', 'andres.isazaa@udea.edu.co', 3128098715, 'Frontend Developer', 'Computrabajo'),
  new Candidate(2, 'Santiago Gaviria Zapata', 'santiago.gaviriaz@udea.edu.co', 3128098715, 'Node.js Developer', 'LinkedIn')];

  constructor(private http: HttpClient) { }

  getCandidates(): Observable<Candidate[]> {
    return this.http.get(`${this.URL}/candidate`)
      .pipe(map(res => {
        const candidates: Candidate[] = [];
        Object.keys(res).forEach(key => {
          const { id, name, email, phoneNumber, aspiratedJob, atractionChannel } = res[key];
          const candidate = new Candidate(id, name, email, phoneNumber, aspiratedJob, atractionChannel);
          candidates.push(candidate);
        });
        return candidates;
      }));
  }

  getCandidateById(id: number): Observable<Candidate> {
    return this.http.get(`${this.URL}/candidate/${id}`)
      .pipe(map(res => {
        const id = res['id'];
        const name = res['name'];
        const email = res['email'];
        const phoneNumber = res['phoneNumber'];
        const aspiratedJob = res['aspiratedJob'];
        const atractionChannel = res['atractionChannel'];
        const candidate = new Candidate(id, name, email, phoneNumber, aspiratedJob, atractionChannel);
        return candidate;
      }));
  }

  createCandidate(candidateData: Object): Observable<Candidate> {
    return this.http.post(`${this.URL}/candidate`, { ...candidateData })
      .pipe(map(res => {
        const id = res['id'];
        const name = res['name'];
        const email = res['email'];
        const phoneNumber = res['phoneNumber'];
        const aspiratedJob = res['aspiratedJob'];
        const atractionChannel = res['atractionChannel'];
        const candidate = new Candidate(id, name, email, phoneNumber, aspiratedJob, atractionChannel);
        return candidate;
      }));
  }

  updateCandidate(candidate: Candidate) {
    return this.http.put(`${this.URL}/candidate/${candidate.id}`, { ...candidate });
  }

  deleteCandidate(id: string) {
    return this.http.delete(`${this.URL}/candidate/${id}`);
  }
}
