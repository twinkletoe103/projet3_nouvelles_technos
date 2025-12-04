import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-technologies',
  imports: [],
  templateUrl: './technologies.html',
  styleUrl: './technologies.css',
})
export class TechnologiesComponent {
  hiddenDescriptions: { [key: string]: boolean } = {
    'angular': true,
    'api': true,
    'laravel': true,
    'standalone': true,
    'responsive': true,
    'git': true,
    'node' : true
  };

  toggleDescription(tech: string): void {
    // console.log(this.hiddenDescriptions[tech])
    if (this.hiddenDescriptions[tech] == false) {
      this.hiddenDescriptions[tech] = true;
    } else {
      for (const item of Object.keys(this.hiddenDescriptions)) {
        this.hiddenDescriptions[item] = true;
      }

      this.hiddenDescriptions[tech] = !this.hiddenDescriptions[tech];
    }
  }
}
