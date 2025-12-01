import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth/auth';

@Component({
  selector: 'app-all-account',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-account.html',
  styleUrls: ['./all-account.css']
})
export class AllAccountComponent {
  comptes: any[] = [];
  loading = true;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.loadComptes();
  }

  loadComptes(): void {
    this.authService.getAllAccounts().subscribe({
      next: (res: any) => {
        this.comptes = res;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des comptes', err);
        this.loading = false;
      }
    });
  }
}

