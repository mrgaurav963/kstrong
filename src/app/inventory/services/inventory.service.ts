import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import {
  InventoryData,
  LocationInventoryData,
} from '../../shared/interface/response';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  http = inject(HttpClient);
  private inventoryData = 'data/inventory.json';
  private locationInventoryData = 'data/locations-inventory.json';

  getInventoryData(): Observable<InventoryData[]> {
    return this.http.get<InventoryData[]>(this.inventoryData);
  }

  getLocationInventoryData(): Observable<LocationInventoryData[]> {
    return this.http.get<LocationInventoryData[]>(this.locationInventoryData);
  }
}
