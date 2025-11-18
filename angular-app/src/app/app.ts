import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
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

  // ← Déclare ici la propriété 'items'
  items = ['À propos'];
}

