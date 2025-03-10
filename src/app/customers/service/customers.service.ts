import { inject, Injectable } from '@angular/core';
import { CustomersData } from '../../shared/interface/response';
import { Observable } from 'rxjs';
import { HttpService } from '../../core/http.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  private jsonUrl = 'data/customers.json';
  constructor(private http: HttpClient) {}
  getData(): Observable<CustomersData[]> {
    return this.http.get<CustomersData[]>(this.jsonUrl); // Returns the JSON data as an observable
  }
}
