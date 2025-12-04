import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { LivreService, Livre } from '../../services/livre';
import { EmpruntService } from '../../services/emprunt';
import { AuthService } from '../../auth/auth';

@Component({
  selector: 'app-livre-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './livre-detail.html',
  styleUrls: ['./livre-detail.css']
})
export class LivreDetailComponent implements OnInit {
  livre: Livre | null = null;
  loading = true;
  isEtudiant = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private livreService: LivreService,
    private empruntService: EmpruntService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const user = this.authService.getCurrentUser();
    this.isEtudiant = !!user && user.type && user.type.toLowerCase() === 'étudiant';

    this.livreService.getLivres().subscribe({
      next: (data) => {
        this.livre = data.find((l: Livre) => l.id === id) || null;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  emprunter(): void {
    if (!this.livre) return;
    this.empruntService.emprunter(this.livre.id).subscribe({
      next: () => {
        alert('Emprunt enregistré');
        this.router.navigate(['/livres']);
      },
      error: (err) => {
        console.error('Erreur emprunt', err);
        const msg = err?.error?.message || err?.message || 'Impossible d\'emprunter ce livre.';
        alert(msg);
      }
    });
  }
}
