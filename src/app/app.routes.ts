import { Routes } from '@angular/router';
import { AccessComponent } from './access/access.component';
import { InventoryComponent } from './inventory/inventory.component';
import { StoreComponent } from './store/store.component';

export const routes: Routes = [
  { path: '', component: AccessComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'store', component: StoreComponent },
];
