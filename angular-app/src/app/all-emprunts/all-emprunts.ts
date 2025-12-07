import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpruntService } from '../services/emprunt';

@Component({
  selector: 'app-all-emprunts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-emprunts.html',
  styleUrl: './all-emprunts.css',
})
export class AllEmpruntsComponent {
  emprunts: any[] = [];
  loading = true;

  constructor(private empruntService: EmpruntService) {}

  ngOnInit(): void {
    this.loadEmprunts();
  }

  loadEmprunts(): void {
    this.empruntService.getAllEmprunts().subscribe({
      next: (res: any) => {
        this.emprunts = res;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des emprunts', err);
        this.loading = false;
      }
    });
  }
}
