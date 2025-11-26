import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Livre {
  id: number;
  titre: string;
  auteur: string;
  isbn: string;
  date_publication: string;
  editeur: string;
  nombre_pages: number;
  description?: string;
  langue: string;
  exemplaires: number;
  categorie?: string;
  couverture?: string | null;
  created_at?: string;
  updated_at?: string;
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
