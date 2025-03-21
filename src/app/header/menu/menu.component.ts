import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-menu',
  imports: [MenubarModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  items = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      routerLink: '/store',
      routerLinkActiveOptions: 'page',
    },
    {
      label: 'Customers',
      icon: 'pi pi-users',
      routerLink: '/customer',
      routerLinkActiveOptions: 'page',
    },
    {
      label: 'My Orders',
      icon: 'pi pi-list',
    },
    {
      label: 'Inventory',
      icon: 'pi pi-file-edit',
      routerLink: '/inventory',
      routerLinkActiveOptions: 'page',
    },
    {
      label: 'REP Agencies',
      icon: 'pi pi-map-marker',
    },
    {
      label: 'Enter Tracking',
      icon: 'pi pi-truck',
    },
    {
      label: 'Reporting',
      icon: 'pi pi-chart-bar',
    },
    {
      label: 'Catalogs',
      icon: 'pi pi-book',
    },
    {
      label: 'Weekly Specials',
      icon: 'pi pi-sparkles',
    },
    {
      label: 'Promotions',
      icon: 'pi pi-envelope',
    },
  ];
}
