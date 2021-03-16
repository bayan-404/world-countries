import { Component, OnInit } from '@angular/core';
import { CountryCardService } from './country-card.service';
@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.css'],
})
export class CountryCardComponent implements OnInit {
  CountriesData$: any = [];

  constructor(private countryCardService: CountryCardService) {}

  ngOnInit(): void {
    this.CountriesData$ = this.countryCardService.getAllCountries();
  }
}
