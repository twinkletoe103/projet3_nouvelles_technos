import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apropos',
  standalone: true,
  templateUrl: './apropos.component.html',
  styleUrls: ['./apropos.component.css'],
  imports: [CommonModule]
})
export class AproposComponent {
  constructor(
    private router: Router
  ) {}

  goToTechnologies(): void {
    this.router.navigate(['/technologies']);
  }
}
