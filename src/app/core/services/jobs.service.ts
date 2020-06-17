import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Job } from '../../shared/models/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  private URL = `${environment.backend_URL}/jobs`;
  constructor(private http: HttpClient) { }

  getJobs(): Observable<Job[]> {
    return this.http.get(`${this.URL}`)
      .pipe(map((res: Job[]) => res));
  }

  getJobById(id: number): Observable<Job> {
    return this.http.get(`${this.URL}/${id}`)
      .pipe(map((res: Job) => res));
  }

  createJob(job: Job): Observable<Job> {
    return this.http.post(`${this.URL}`, job)
      .pipe(map((res: Job) => res));
  }

  updateJob(job: Job): Observable<string> {
    return this.http.put(`${this.URL}/${job.id}`, job)
      .pipe(map((res: { message: string }) => res.message));
  }

  deleteJob(id: number): Observable<string> {
    return this.http.delete(`${this.URL}/${id}`)
      .pipe(map((res: string) => res));
  }
}
