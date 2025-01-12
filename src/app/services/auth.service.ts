import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<void> {
    return this.http
      .post<{ token: string }>(`${this.apiUrl}/login`, { email, password })
      .pipe(
        map((response) => {
          localStorage.setItem('token', response.token);
        })
      );
  }

  register(
    username: string,
    email: string,
    password: string
  ): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/register`, {
      username,
      email,
      password,
    });
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

  getUserInfo(): Observable<{ username: string }> {
    const token = !!localStorage.getItem('token');
    return this.http.get<{ username: string }>(`${this.apiUrl}/profile`, {
      headers: this.getAuthHeaders(),
    });
  }
}
