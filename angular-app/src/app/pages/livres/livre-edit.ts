import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { LivreService, Livre } from '../../services/livre';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../auth/auth';

@Component({
  selector: 'app-livre-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './livre-edit.html',
  styleUrls: ['./livre-edit.css']
})
export class LivreEditComponent implements OnInit {
  livre: Partial<Livre> = {};
  loading = true;
  canEdit = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private livreService: LivreService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const user = this.auth.getCurrentUser();
    this.canEdit = !!user && ['professeur', 'admin'].includes((user.type || '').toLowerCase());

    if (!this.canEdit) {
      alert('Accès refusé');
      this.router.navigate(['/livres']);
      return;
    }

    this.livreService.getLivres().subscribe({
      next: (data) => {
        const found = data.find((l: Livre) => l.id === id);
        if (!found) {
          alert('Livre introuvable');
          this.router.navigate(['/livres']);
          return;
        }
        this.livre = { ...found };
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  save(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.livreService.updateLivre(id, this.livre).subscribe({
      next: () => {
        alert('Livre mis à jour');
        this.router.navigate(['/livres']);
      },
      error: (err) => {
        console.error('Erreur mise à jour', err);
        alert(err?.error?.message || 'Erreur lors de la mise à jour');
      }
    });
  }
}
