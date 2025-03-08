import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  private jsonUrl = '../data/inventory.json';
  constructor(private http: HttpClient) {}

  getData(): Observable<any[]> {
    console.log(this.jsonUrl);
    return this.http.get<any[]>(this.jsonUrl); // Returns the JSON data as an observable
  }
}
