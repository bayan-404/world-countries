import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AllContriesService {
  constructor(private http: HttpClient) {}

  getAllCountries(): Observable<any> {
    console.log("the passkey :",environment.PASSKEY)
    return (

      this.http.get(`https://api.countrylayer.com/v2/all?access_key=${environment.PASSKEY}`)
    )
    ;
  }
}
