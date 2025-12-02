import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoraireService, Horaire } from '../../services/horaire';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-library-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './library-status.html',
  styleUrls: ['./library-status.css']
})
export class LibraryStatusComponent implements OnInit, OnDestroy {
  isOpen: boolean = false;
  private horaires: Horaire[] = [];
  private refreshSubscription?: Subscription;

  constructor(private horaireService: HoraireService) {}

  ngOnInit(): void {
    this.loadHoraires();
    // Rafraîchir le statut toutes les minutes
    this.refreshSubscription = interval(60000).subscribe(() => {
      this.checkIfOpen();
    });
  }

  ngOnDestroy(): void {
    if (this.refreshSubscription) {
      this.refreshSubscription.unsubscribe();
    }
  }

  private loadHoraires(): void {
    this.horaireService.getHoraires().subscribe({
      next: (horaires) => {
        this.horaires = horaires;
        this.checkIfOpen();
      },
      error: (error) => {
        console.error('Erreur lors du chargement des horaires:', error);
        this.isOpen = false;
      }
    });
  }

  private checkIfOpen(): void {
    const now = new Date();
    const currentDay = this.getCurrentDayName(now);
    const currentTime = this.formatTime(now);

    // Trouver l'horaire du jour actuel
    const todaySchedule = this.horaires.find(
      h => h.journee.toLowerCase() === currentDay.toLowerCase()
    );

    if (!todaySchedule) {
      this.isOpen = false;
      return;
    }

    // Si la journée est marquée comme fermée
    if (!todaySchedule.ouvert) {
      this.isOpen = false;
      return;
    }

    // Vérifier si l'heure actuelle est entre l'ouverture et la fermeture
    if (todaySchedule.heure_ouverture && todaySchedule.heure_fermeture) {
      this.isOpen = this.isTimeInRange(
        currentTime,
        todaySchedule.heure_ouverture,
        todaySchedule.heure_fermeture
      );
    } else {
      this.isOpen = false;
    }
  }

  private getCurrentDayName(date: Date): string {
    const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    return days[date.getDay()];
  }

  private formatTime(date: Date): string {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  private isTimeInRange(current: string, open: string, close: string): boolean {
    return current >= open && current <= close;
  }
}
