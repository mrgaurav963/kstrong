import { Component, inject } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { Menu } from 'primeng/menu';
import { Avatar } from 'primeng/avatar';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MenuComponent, Menu, Avatar],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  authService = inject(AuthService);
  isUserAuthentic: boolean = false;
  router = inject(Router);
  userItems = [
    {
      items: [
        {
          label: 'View Profile',
          icon: 'pi pi-user',
        },
        {
          label: 'Edit Profile',
          icon: 'pi pi-user-edit',
        },
        {
          label: 'Change Password',
          icon: 'pi pi-cog',
        },
        {
          label: 'Log Out',
          icon: 'pi pi-sign-out',
          command: () => {
            this.logout();
          },
        },
      ],
    },
  ];

  ngOnInit() {
    this.authService
      .isLoggedIn()
      .subscribe((data) => (this.isUserAuthentic = data));
    //  this.isUserAuthentic = this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
    //  this.isUserAuthentic = false;
  }
}
