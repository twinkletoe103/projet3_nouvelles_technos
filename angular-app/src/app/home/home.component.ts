import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoraireService, Horaire } from '../services/horaire';
import { AuthService } from '../auth/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,  // si tu utilises standalone components
  imports: [CommonModule] // ← nécessaire pour *ngFor, *ngIf
})
export class HomeComponent implements OnInit {

  horaires: Horaire[] = [];
  isAdmin = false;
  loading = true;

  constructor(private horaireService: HoraireService, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.horaireService.getHoraires().subscribe({
      next: (data) => this.horaires = data,
      error: (err) => console.error('Erreur chargement horaires', err)
    });
    const user = this.authService.getCurrentUser();
    this.isAdmin = !!user && user.type && user.type.toLowerCase() === 'admin';
  }

  goToEditHoraire(): void {
    this.router.navigate(['/edit-horaire']);
  }
}
