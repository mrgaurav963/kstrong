import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InventoryData } from '../shared/interface/response';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  private jsonUrl = 'data/inventory.json';
  constructor(private http: HttpClient) {}

  getData(): Observable<InventoryData[]> {
    return this.http.get<InventoryData[]>(this.jsonUrl); // Returns the JSON data as an observable
  }
}
