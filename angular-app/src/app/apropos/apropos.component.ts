import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-apropos',
  standalone: true,
  templateUrl: './apropos.component.html',
  styleUrls: ['./apropos.component.css'],
  imports: [CommonModule]
})
export class AproposComponent {
  constructor() {
    console.log('AproposComponent loaded');
  }
}
