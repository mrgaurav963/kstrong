import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductData } from '../../shared/interface/response';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private jsonUrl = 'data/products.json';
  constructor(private http: HttpClient) {}

  getData(): Observable<ProductData[]> {
    console.log(this.jsonUrl);
    return this.http.get<ProductData[]>(this.jsonUrl); // Returns the JSON data as an observable
  }
}
