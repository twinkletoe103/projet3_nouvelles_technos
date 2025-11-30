import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Horaire {
  id: number;
  journee: string;
  heure_ouverture?: string | null;
  heure_fermeture?: string | null;
  ouvert: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class HoraireService {

  private apiUrl = 'http://localhost:8000/api/horaires';

  constructor(private http: HttpClient) { }

  getHoraires(): Observable<Horaire[]> {
    return this.http.get<Horaire[]>(this.apiUrl);
  }

  create(horaire: Horaire): Observable<Horaire> {
    return this.http.post<Horaire>(this.apiUrl, horaire);
  }

  update(id: number, horaire: Horaire): Observable<Horaire> {
    return this.http.put<Horaire>(`${this.apiUrl}/${id}`, horaire);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

