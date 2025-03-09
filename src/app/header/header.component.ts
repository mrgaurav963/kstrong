import { Component } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { Menu } from 'primeng/menu';
import { Avatar } from 'primeng/avatar';

@Component({
  selector: 'app-header',
  imports: [MenuComponent, Menu, Avatar],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
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
        },
      ],
    },
  ];
}
