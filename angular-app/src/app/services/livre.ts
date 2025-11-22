import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Livre {
  id: number;
  titre: string;
  auteur: string;
  categorie: string;
  annee: number;
  quantite: number;
}

@Injectable({
  providedIn: 'root'
})
export class LivreService {

  private apiUrl = 'http://127.0.0.1:8000/api/livres';

  constructor(private http: HttpClient) {}

  getLivres(): Observable<Livre[]> {
    return this.http.get<Livre[]>(this.apiUrl);
  }
}
