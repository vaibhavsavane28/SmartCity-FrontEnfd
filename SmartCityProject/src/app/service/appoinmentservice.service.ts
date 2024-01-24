import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppoinmentserviceService {
  baseUrl = 'http://localhost:3306';

  constructor(private http: HttpClient) {}

  createAppointment(appointment: object): Observable<Object> {
    console.log('inside service');
    console.log(appointment);
    return this.http.post(`${this.baseUrl}/appointment`, appointment);
  }
}
