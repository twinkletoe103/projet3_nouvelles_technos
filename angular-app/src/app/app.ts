import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { AuthService } from './auth/auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavbarComponent, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App {
  title() {
    return 'Projet 3 - Nouvelles technologies';
  }

  onLinkClick() {
    console.log('Link clicked');
  }

  constructor(private authService: AuthService) {}

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logout(): void {
    this.authService.logout();
  }

  getCurrentUser() {
    return this.authService.getCurrentUser();
  }
}
