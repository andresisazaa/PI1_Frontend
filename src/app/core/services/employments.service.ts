import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmploymentsService {
  private URL = `${environment.backend_URL}/employments`;
  constructor(private http: HttpClient) { }

  getEmployments(): Observable<[]> {
    return this.http.get(`${this.URL}`)
      .pipe(map((res: []) => res));
  }

  getEmploymentById(id: string): Observable<any> {
    return this.http.get(`${this.URL}/${id}`)
      .pipe(map((res: any) => res));
  }

  createEmployment(employmentData: any): Observable<any> {
    return this.http.post(`${this.URL}`, employmentData)
      .pipe(map((res: any) => res));
  }

  updateEmployment(id: string, employmentData: any): Observable<any> {
    return this.http.put(`${this.URL}/${id}`, employmentData)
      .pipe(map((res: any) => res));
  }
}
