import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GarageService {
  private apiUrl = 'http://localhost:3000/api/garages/';

  constructor(private http: HttpClient) {}

  // Add a helper method to get the Authorization header
  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
    return new HttpHeaders({
      Authorization: `Bearer ${token}`, // Add Authorization header
    });
  }

  // Get government garages with authorization
  getGovernmentGarages(): Observable<any> {
    return this.http.get(this.apiUrl + 'government-garages', {
      headers: this.getAuthHeaders(),
    });
  }

  // Get app garages with authorization
  getAppGarages(): Observable<any> {
    return this.http.get(this.apiUrl + 'app-garages', {
      headers: this.getAuthHeaders(),
    });
  }

  // Save garages with authorization
  saveGarages(garages: any[]): Observable<any> {
    return this.http.post(
      this.apiUrl + 'save-garages',
      { garages },
      { headers: this.getAuthHeaders() }
    );
  }

  // Delete garage with authorization
  deleteGarage(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}delete-garage/${id}`, {
      headers: this.getAuthHeaders(),
    });
  }
}
