import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private path = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {}

  /**
   * Logs in the user with the provided credentials.
   * @param credentials - Object containing the user's login credentials.
   * @returns Observable<any> - The HTTP response from the login request.
   */
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.path}/api/login`, credentials);
  }

  /**
   * Logs out the user.
   * @returns Observable<any> - The HTTP response from the logout request.
   */
  logout(): Observable<any> {
    return this.http.post(`${this.path}/api/logout`, {});
  }

  /**
   * Registers a new user.
   * @param userData - Object containing the user's registration data.
   * @returns Observable<any> - The HTTP response from the registration request.
   */
  register(userData: any): Observable<any> {
    return this.http.post(`${this.path}/api/register`, userData);
  }

  /**
   * Retrieves all events.
   * @returns Observable<any> - The HTTP response containing the list of events.
   */
  getEvents(): Observable<any> {
    return this.http.get(this.path + '/api/events');
  }

  /**
   * Retrieves an event by its ID.
   * @param eventId - The ID of the event.
   * @returns Observable<any> - The HTTP response containing the event details.
   */
  getEventById(eventId: number): Observable<any> {
    const url = `${this.path}/api/events/${eventId}`;
    return this.http.get(url);
  }

  /**
   * Creates a new event.
   * @param data - Object containing the event data.
   * @returns Observable<any> - The HTTP response from the create event request.
   */
  createEvent(data: any): Observable<any> {
    return this.http.post(this.path + '/api/events', data);
  }

  /**
   * Updates an existing event.
   * @param data - Object containing the updated event data.
   * @returns Observable<any> - The HTTP response from the update event request.
   */
  updateEvent(data: any): Observable<any> {
    const eventId = data.id;
    const url = `${this.path}/api/events/${eventId}`;
    return this.http.put(url, data);
  }

  /**
   * Deletes an event by its ID.
   * @param eventId - The ID of the event to delete.
   * @returns Observable<any> - The HTTP response from the delete event request.
   */
  deleteEvent(eventId: number): Observable<any> {
    const url = `${this.path}/api/events/${eventId}`;
    return this.http.delete(url);
  }

  /**
   * Retrieves registered events.
   * @returns Observable<Event[]> - The HTTP response containing the list of registered events.
   */
  getRegEvents(): Observable<Event[]> {
    const url = `${this.path}/api/reg_events`; // Replace with your API endpoint for registered events
    return this.http.get<Event[]>(url);
  }

  /**
   * Registers a user for an event.
   * @param user_id - The ID of the user.
   * @param event_id - The ID of the event.
   * @returns Observable<any> - The HTTP response from the register event request.
   */
  registerEvent(user_id: number, event_id: number): Observable<any> {
    const url = `${this.path}/api/registerEvent`;

    const payload = {
      user_id: user_id,
      event_id: event_id
    };

    return this.http.post(url, payload);
  }

  /**
   * Retrieves the categories of events.
   * @returns Observable<any> - The HTTP response containing the list of event categories.
   */
  getCategories(): Observable<any> {
    const url = this.path + '/api/categories';
    return this.http.get(url);
  }

  /**
   * Retrieves the count of registrations for an event.
   * @param eventId - The ID of the event.
   * @returns Observable<number> - The HTTP response containing the count of registrations for the event.
   */
  getRegistrationCount(eventId: number): Observable<number> {
    return this.http.get<number>(`${this.path}/api/registerEvent/${eventId}`);
  }
}
