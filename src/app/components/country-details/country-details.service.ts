import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CountryDetailsService {
  constructor(private http: HttpClient) {}

  getCountry(code: string): Observable<any> {
    return this.http.get(`https://restcountries.eu/rest/v2/alpha/${code}`);
  }
}
