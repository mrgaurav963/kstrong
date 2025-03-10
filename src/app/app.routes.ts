import { Routes } from '@angular/router';
import { AccessComponent } from './access/access.component';
import { InventoryComponent } from './inventory/inventory.component';
import { StoreComponent } from './store/store.component';
import { authGuard } from './gaurds/auth.guard';
import { authRedirectGuard } from './gaurds/auth-redirect.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    component: AccessComponent,
    canActivate: [authRedirectGuard],
  },
  // {
  //   path: '**',
  //   component: AccessComponent,
  // },
  {
    path: 'inventory',
    component: InventoryComponent,
    canActivate: [authGuard],
  },
  { path: 'store', component: StoreComponent, canActivate: [authGuard] },
];
