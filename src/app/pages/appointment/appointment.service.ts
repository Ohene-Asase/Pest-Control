import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }

  appointment(details: any) {
    return this.http.post<any>(`${environment.baseApi}/appointment`, details).toPromise();
  }
}
