import { Routes } from '@angular/router';
import { AproposComponent } from './apropos/apropos.component';

export const routes: Routes = [
  { path: 'apropos', component: AproposComponent, data: { debug: 'Navigating to AproposComponent' } },
  { path: '', redirectTo: 'apropos', pathMatch: 'full' }
];
