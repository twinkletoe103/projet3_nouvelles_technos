import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivreService, Livre } from '../../services/livre';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../auth/auth';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-livres',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './livres.html',
  styleUrls: ['./livres.css']
})
export class LivresComponent implements OnInit {

  livres: Livre[] = [];
  loading = true;
  isProf = false;
  isAdmin = false;

  // Champs du formulaire (une seule déclaration!)
  newIsbn: string = "";
  newTitre: string = "";
  newAuteur: string = "";
  newDatePublication: string = "";
  newEditeur: string = "";
  newNombrePages: number = 1;
  newExemplaires: number = 1;
  newLangue: string = "français";
  newCategorie: string = "";
  newDescription: string = "";
  newCouverture: string = "";

  constructor(private livreService: LivreService, private authService: AuthService) {}

  ngOnInit(): void {
    const user = this.authService.getCurrentUser();
    this.isProf = !!user && user.type && user.type.toLowerCase() === 'professeur';
    this.isAdmin = !!user && user.type && user.type.toLowerCase() === 'admin';

    this.loadLivres();
  }

  loadLivres(): void {
    this.loading = true;
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

  addLivre() {

    const livre = {
      isbn: this.newIsbn,
      titre: this.newTitre,
      auteur: this.newAuteur,
      date_publication: this.newDatePublication,
      editeur: this.newEditeur,
      nombre_pages: this.newNombrePages,
      exemplaires: this.newExemplaires,
      langue: this.newLangue,
      categorie: this.newCategorie,
      description: this.newDescription,
      couverture: this.newCouverture
    };

    this.livreService.addLivre(livre).subscribe({
      next: (res) => {
        this.livres.push(res);
        alert("📘 Livre ajouté !");
      },
      error: (err) => {
        console.error("Erreur API :", err);
        alert("Erreur lors de l'ajout.");
      }
    });
  }

  deleteLivre(id: number): void {
    if (!confirm('Supprimer ce livre ?')) return;

    this.livreService.deleteLivre(id).subscribe({
      next: () => this.loadLivres(),
      error: (err) => console.error('Erreur suppression', err)
    });
  }
}
