import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '../auth/auth';

@Injectable({
  providedIn: 'root'
})
export class EmpruntService {
  private apiBaseUrl = 'http://127.0.0.1:8000/api';

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) {}

  emprunter(livreId: number): Observable<any> {
    const user = this.auth.getCurrentUser();
    if (!user || !user.id) {
      return throwError(() => new Error('Utilisateur non connecté'));
    }

    const apiUrl = `${this.apiBaseUrl}/empruntsStore/${user.id}`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth.getToken()}`
    });

    return this.http.post(apiUrl, { livre_id: livreId }, { headers });
  }

  getEmprunts(): Observable<any> {
    const user = this.auth.getCurrentUser();
    if (!user || !user.id) {
      return throwError(() => new Error('Utilisateur non connecté'));
    }

    const apiUrl = `${this.apiBaseUrl}/empruntsStore/${user.id}`;

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });

    return this.http.get(apiUrl, { headers });
  }
}
