import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { HoraireService, Horaire } from '../services/horaire';

@Component({
  selector: 'app-edit-horaire',
  templateUrl: './edit-horaire.html',
  styleUrls: ['./edit-horaire.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class EditHoraireComponent implements OnInit {
  horaires: Horaire[] = [];
  forms: FormGroup[] = [];

  constructor(private horaireService: HoraireService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.horaireService.getHoraires().subscribe((data) => {
      this.horaires = data;

      // créer un formulaire pour chaque horaire
      this.forms = this.horaires.map(h =>
        this.fb.group({
          id: [h.id],
          journee: [h.journee],
          heure_ouverture: [h.heure_ouverture],
          heure_fermeture: [h.heure_fermeture],
          ouvert: [h.ouvert]
        })
      );
    });
  }

  updateHoraire(form: FormGroup): void {
    const horaire = form.value;
    if (!horaire.id) return;

    this.horaireService.update(horaire.id, horaire).subscribe({
      next: () => alert(`Horaire de ${horaire.journee} mis à jour !`),
      error: (err) => console.error(err)
    });
  }
}
