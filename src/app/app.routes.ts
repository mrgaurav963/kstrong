import { Routes } from '@angular/router';
import { AccessComponent } from './access/access.component';
import { InventoryComponent } from './inventory/inventory.component';

export const routes: Routes = [
  { path: '', component: AccessComponent },
  { path: 'inventory', component: InventoryComponent },
];
