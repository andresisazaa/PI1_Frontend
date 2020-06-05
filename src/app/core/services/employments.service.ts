import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Employment } from 'src/app/shared/models/employment.model';

@Injectable({
  providedIn: 'root'
})
export class EmploymentsService {
  private URL = `${environment.backend_URL}/employments`;
  constructor(private http: HttpClient) { }

  getEmployments(): Observable<Employment[]> {
    return this.http.get(`${this.URL}`)
      .pipe(map((res: Employment[]) => res));
  }

  getEmploymentById(id: string): Observable<Employment> {
    return this.http.get(`${this.URL}/${id}`)
      .pipe(map((res: Employment) => res));
  }

  createEmployment(employmentData: Employment): Observable<Employment> {
    return this.http.post(`${this.URL}`, employmentData)
      .pipe(map((res: Employment) => res));
  }

  updateEmployment(employmentData: Employment): Observable<string> {
    return this.http.put(`${this.URL}/${employmentData.id}`, employmentData)
      .pipe(map((res: { message: string }) => res.message));
  }
}
