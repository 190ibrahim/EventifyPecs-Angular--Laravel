import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private path = 'http://127.0.0.1:8000'
  constructor(private http:HttpClient) { }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.path}/api/login`, credentials);
  }

  logout(): Observable<any> {
    return this.http.post(`${this.path}/api/logout`, {});
  }

  register(userData: any): Observable<any> {
    return this.http.post(`${this.path}/api/register`, userData);
  }

  getEvents(): Observable<any> {
    return this.http.get(this.path+'/api/events');
  }
  getEventById(eventId: number): Observable<any> {
    const url = `${this.path}/api/events/${eventId}`;
    return this.http.get(url);
  }
  createEvent(data: any): Observable<any> {
    return this.http.post(this.path+'/api/events', data);
  }
  updateEvent(data: any): Observable<any> {
    const eventId = data.id;
    const url = `${this.path}/api/events/${eventId}`;
    return this.http.put(url, data);
  }
  deleteEvent(eventId: number): Observable<any> {
    const url = `${this.path}/api/events/${eventId}`;
    return this.http.delete(url);
  }

  getRegEvents(): Observable<Event[]> {
    const url = `${this.path}/reg_events`; // Replace with your API endpoint for registered events
    return this.http.get<Event[]>(url);
  }

  registerEvent(event: any): Observable<any> {
    const url = `${this.path}/api/registerEvent`;

    return this.http.post(url, event);
  }
}
