import { Routes } from '@angular/router';
import { AproposComponent } from './apropos/apropos.component';
import { HomeComponent } from './home/home.component';
import { LivresComponent } from './pages/livres/livres';
import { LivreDetailComponent } from './pages/livres/livre-detail';
import { LivreEditComponent } from './pages/livres/livre-edit';
import { LoginComponent } from './auth/login/login';
import { RegisterComponent } from './auth/register/register';
import { DashboardComponent } from './dashboard/dashboard';
import { EditProfileComponent } from './edit-profile/edit-profile';
import { AuthGuard } from './auth/auth';
import { EditHoraireComponent } from './edit-horaire/edit-horaire';
import { AllAccountComponent } from './all-account/all-account';
import { TechnologiesComponent } from './technologies/technologies';
import { AllEmpruntsComponent } from './all-emprunts/all-emprunts';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'apropos', component: AproposComponent },
  { path: 'livres', component: LivresComponent },
  { path: 'livres/:id', component: LivreDetailComponent },
  { path: 'livres/:id/edit', component: LivreEditComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'edit-profile', component: EditProfileComponent, canActivate: [AuthGuard] },
  { path: 'edit-horaire', component: EditHoraireComponent },
  { path: 'all-account', component: AllAccountComponent, canActivate: [AuthGuard] },
  { path: 'technologies', component: TechnologiesComponent },
  { path: 'all-emprunts', component: AllEmpruntsComponent, canActivate: [AuthGuard] },

];

