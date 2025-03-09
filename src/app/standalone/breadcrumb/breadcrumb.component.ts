import { Component } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-breadcrumb',
  imports: [BreadcrumbModule, RouterLink, CommonModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
})
export class BreadcrumbComponent {
  items = [
    { label: 'Home', icon: 'pi pi-home', route: '/' },
    { label: 'Inventory', route: '/inventory' },
  ];
}
