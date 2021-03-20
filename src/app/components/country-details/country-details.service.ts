import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CountryDetailsService {
  constructor(private http: HttpClient) {}

  getCountry(code: string) {
    return this.http.get(`https://restcountries.eu/rest/v2/alpha/${code}`);
  }
}
