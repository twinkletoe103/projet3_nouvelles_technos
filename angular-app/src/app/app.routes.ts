import { Routes } from '@angular/router';
import { AproposComponent } from './apropos/apropos.component';
import { HomeComponent } from './home/home.component';
import { LivresComponent } from './pages/livres/livres';
import { LoginComponent } from './auth/login/login';
import { RegisterComponent } from './auth/register/register';
import { DashboardComponent } from './dashboard/dashboard';
import { AuthGuard } from './auth/auth';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'apropos', component: AproposComponent },
  { path: 'livres', component: LivresComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // Décommentez quand vous aurez le DashboardComponent
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }
];

