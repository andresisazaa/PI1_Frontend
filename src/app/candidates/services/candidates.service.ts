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
  candidates: Candidate[] = [
    {
      id: 1,
      name: 'Andrés Felipe Isaza Arboleda',
      email: 'andres.isazaa@udea.edu.co',
      phoneNumber: '3128098715',
      aspiratedJob: 'Node.js Developer',
      attractionChannel: 'LinkedIn',
      CVUrl: 'https://www.youtube.com'
    },
    {
      id: 2,
      name: 'Santiago Gaviria Zapata',
      email: 'santiago.gaviriaz@udea.edu.co',
      phoneNumber: '3128098715',
      aspiratedJob: 'Node.js Developer',
      attractionChannel: 'LinkedIn',
      CVUrl: 'https://www.facebook.com'
    }];

  constructor(private http: HttpClient) { }

  pushCandidate(candidate: Candidate) {
    this.candidates.push(candidate);
  }

  getCandidates(): Observable<Candidate[]> {
    return this.http.get(`${this.URL}/candidate`)
      .pipe(map(res => {
        const candidates: Candidate[] = [];
        Object.keys(res).forEach(key => {
          const { id, name, email, phoneNumber, aspiratedJob, CVUrl } = res[key];
          const attractionChannel = res['atractionChannel'];
          const candidate: Candidate = { id, name, email, phoneNumber, aspiratedJob, attractionChannel, CVUrl };
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
        const attractionChannel = res['atractionChannel'];
        const CVUrl = res['CVUrl'];
        const candidate: Candidate = { id, name, email, phoneNumber, aspiratedJob, attractionChannel, CVUrl };
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
        const attractionChannel = res['atractionChannel'];
        const CVUrl = res['CVUrl'];
        const candidate: Candidate = { id, name, email, phoneNumber, aspiratedJob, attractionChannel, CVUrl };
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
