import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-access',
  imports: [LoginComponent],
  templateUrl: './access.component.html',
  styleUrl: './access.component.scss',
})
export class AccessComponent {}
