import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-login',
  imports: [
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordModule,
    InputTextModule,
    CheckboxModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);
  loginId!: string;
  formGroup = new FormGroup({
    loginId: new FormControl(),
    password: new FormControl(),
    rememberPassword: new FormControl(),
  });

  login() {
    if (
      this.formGroup.value.loginId === 'derick' &&
      this.formGroup.value.password === 'secured@123'
    ) {
      const mockToken = 'fake-jwt-token';
      this.authService.login(mockToken);
      this.router.navigate(['/store']);
    } else {
      console.log('Error');
    }
  }
}
