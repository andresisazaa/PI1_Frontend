import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Job } from '../../models/job.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getJobs(): Observable<Job[]> {
    return this.http.get(`${this.API_URL}/jobs`)
      .pipe(map(response => {
        const jobs: Job[] = [];
        Object.keys(response).forEach(key => {
          const { id, name, description } = response[key];
          const job: Job = { id, name, description };
          jobs.push(job);
        });
        return jobs;
      }));
  }

  getJobById(id: number): Observable<Job> {
    return this.http.get(`${this.API_URL}/jobs/${id}`)
      .pipe(map(response => {
        const id = response['id'];
        const name = response['name'];
        const description = response['descripton'];
        const job: Job = { id, name, description };
        return job;
      }));
  }

  createJob(jobData: Object): Observable<Job> {
    return this.http.post(`${this.API_URL}/jobs`, { ...jobData })
      .pipe(map(response => {
        const id = response['id'];
        const name = response['name'];
        const description = response['descripton'];
        const job: Job = { id, name, description };
        return job;
      }));
  }

  updateJob(jobData: Job) {
    return this.http.put(`${this.API_URL}/jobs/${jobData.id}`, { ...jobData });
  }

  deleteJob(id: number) {
    return this.http.delete(`${this.API_URL}/jobs/${id}`);
  }
}
