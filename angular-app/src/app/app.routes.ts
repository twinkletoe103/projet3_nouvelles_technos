import { Routes } from '@angular/router';
import { AproposComponent } from './apropos/apropos.component';
import { HomeComponent } from './home/home.component';
import { LivresComponent } from './pages/livres/livres';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'apropos', component: AproposComponent },
  { path: 'livres', component: LivresComponent }
];
