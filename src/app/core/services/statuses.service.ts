import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Status } from '../../shared/models/status.model';

@Injectable({
  providedIn: 'root'
})
export class StatusesService {
  private URL = `${environment.backend_URL}/statuses`;
  constructor(private http: HttpClient) { }

  getStatuses(): Observable<Status[]> {
    return this.http.get(`${this.URL}`)
      .pipe(map((res: Status[]) => res));
  }

  getStatusById(id: number): Observable<Status> {
    return this.http.get(`${this.URL}/${id}`)
      .pipe(map((res: Status) => res));
  }

  createStatus(status: Status): Observable<Status> {
    return this.http.post(`${this.URL}`, status)
      .pipe(map((res: Status) => res));
  }

  updateStatus(status: Status): Observable<string> {
    return this.http.put(`${this.URL}/${status.id}`, status)
      .pipe(map((res: { message: string }) => res.message));
  }

  deleteStatus(id: number): Observable<string> {
    return this.http.delete(`${this.URL}/${id}`)
      .pipe(map((res: string) => res));
  }
}
