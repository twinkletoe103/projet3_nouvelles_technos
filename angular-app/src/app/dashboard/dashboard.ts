import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth/auth';
import { Router } from '@angular/router';

interface Droit {
  nom: string;
  description: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})

export class DashboardComponent {
  droits: Droit[] = [];
  user: any = null;
  loading: boolean = false;
  isAdmin = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user = this.getCurrentUser();
    const user = this.authService.getCurrentUser();
    this.isAdmin = !!user && user.type && user.type.toLowerCase() === 'admin';
    if (this.user?.type) {
      this.loadDroits();
    }
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  getCurrentUser() {
    return this.authService.getCurrentUser();
  }

  loadDroits(): void {
    this.loading = true;
    this.authService.getDroitsByType(this.user.type).subscribe({
      next: (response) => {
        this.droits = response.droits || [];
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des droits', error);
        this.droits = [];
        this.loading = false;
      }
    });
  }

  goToEditProfile(): void {
    this.router.navigate(['/edit-profile']);
  }

  goToAllAccount(): void {
    this.router.navigate(['/all-account']);
  }

  goToAllEmprunts(): void {
    this.router.navigate(['/all-emprunts']);
  }
}
