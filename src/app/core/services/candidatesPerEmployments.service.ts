import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CandidatesPerEmploymentsService {
  private URL = `${environment.backend_URL}/candidates-per-employments`;
  constructor(private http: HttpClient) { }

  getAll(): Observable<[]> {
    return this.http.get(this.URL)
      .pipe(map((res: []) => res));
  }

  getById(id: number): Observable<any> {
    return this.http.get(`${this.URL}/${id}`)
      .pipe(map((res: any) => res));
  }

  create(data: any): Observable<any> {
    return this.http.post(this.URL, { ...data })
      .pipe(map((res: any) => res));
  }

  update(data: any): Observable<string> {
    return this.http.put(`${this.URL}/${data.id}`, { ...data })
      .pipe(map((res: { message: string }) => res.message));
  }
}
