import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth/auth';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './edit-profile.html',
  styleUrls: ['./edit-profile.css']
})
export class EditProfileComponent implements OnInit {
  editForm: FormGroup;
  user: any = null;
  errorMessage = '';
  successMessage = '';
  loading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.editForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.minLength(6)],
      confirmPassword: ['']
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit(): void {
    this.user = this.authService.getCurrentUser();
    if (this.user) {
      this.editForm.patchValue({
        name: this.user.name,
        email: this.user.email
      });
    } else {
      this.router.navigate(['/login']);
    }
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;

    if (password && password !== confirmPassword) {
      return { mismatch: true };
    }
    return null;
  }

  onSubmit(): void {
    if (this.editForm.valid && this.user) {
      this.loading = true;
      this.errorMessage = '';
      this.successMessage = '';

      const { confirmPassword, password, ...userData } = this.editForm.value;

      const dataToSend = password ? { ...userData, password } : userData;

      this.authService.updateProfile(this.user.id, dataToSend).subscribe({
        next: (response) => {
          this.loading = false;
          this.successMessage = 'Profil mis à jour avec succès !';

          setTimeout(() => {
            this.router.navigate(['/dashboard']);
          }, 2000);
        },
        error: (error) => {
          this.loading = false;
          console.error('Erreur lors de la mise à jour:', error);

          if (error.error?.errors) {
            const errors = error.error.errors;
            this.errorMessage = Object.values(errors).flat().join(', ');
          } else {
            this.errorMessage = error.error?.message || 'Erreur lors de la mise à jour du profil';
          }
        }
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/dashboard']);
  }
}
