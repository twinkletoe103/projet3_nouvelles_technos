import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivreService, Livre } from '../../services/livre';

@Component({
  selector: 'app-livres',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './livres.html',
  styleUrls: ['./livres.css']
})
export class LivresComponent implements OnInit {

  livres: Livre[] = [];
  loading = true;

  constructor(private livreService: LivreService) {}

  ngOnInit(): void {
    this.livreService.getLivres().subscribe({
      next: (data) => {
        this.livres = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erreur API :', err);
        this.loading = false;
      }
    });
  }
}
