import { Component } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-categories',
  imports: [MenuModule, RouterLink, NgIf],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent {
  productCategories = [
    { label: 'All Products', routerLink: '/store', routerLinkActiveOptions: 'page' },
    { label: 'Anchor Straps' },
    { label: 'Anchors' },
    { label: 'Confined Space/Rescue' },
    { label: 'Connectors' },
    { label: 'Drop Prevention' },
    { label: 'Harness Accessories' },
    { label: 'Harness/Lanyard Kit' },
    { label: 'Harness' },
    { label: 'Horizontal Lifeline Systems' },
    { label: 'Ladder Climbing Systems' },
    { label: 'Roof Anchors' },
    { label: 'Roofer Kits' },
    { label: 'Rope Grabs' },
    { label: 'Self-Retracting Devices' },
    { label: 'Shock Absorbing Lanyards' },
    { label: 'Tool Lanyards and Kits' },
    { label: 'Vertical Lifelines' },
    { label: 'Work Positioning Lanyards/Devices' },
  ];
}
