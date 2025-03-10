import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';
  private loggedInSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(this.isAuthenticated());

  constructor() {}

  // Login function to save the token
  login(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
    this.loggedInSubject.next(true);
  }

  // Logout function to clear the token
  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.loggedInSubject.next(false);
  }

  // Check if the user is authenticated
  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  // Observable for authentication state
  isLoggedIn(): Observable<boolean> {
    return this.loggedInSubject.asObservable();
  }
}
