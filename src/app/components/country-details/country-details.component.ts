import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryDetailsService } from './country-details.service';
import { Country } from '../../models/Country';
import { Subscriber } from 'rxjs';
@Component({
  selector: 'country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css'],
})
export class CountryDetailsComponent implements OnInit {
  countryName: string = '';
  countryDetails: any;
  borderCountryDetails: any = [];
  countryBorders: Array<string>;

  isLoading: boolean = true;
  constructor(
    private route: ActivatedRoute,
    private countryDetailsSevice: CountryDetailsService
  ) {
    this.countryBorders = [];
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      this.countryDetailsSevice
        .getCountry(params.get('code'))
        .subscribe((contryData: Country) => {
          this.countryDetails = contryData;
          this.countryBorders = this.countryDetails.borders;
          this.countryDetails
            ? (this.isLoading = false)
            : (this.isLoading = true);
          this.bordersFlag();
        });
    });
  }

  bordersFlag() {
    this.borderCountryDetails = [];
    this.countryBorders.length > 0 &&
      this.countryBorders.map((borderCode) =>
        this.countryDetailsSevice
          .getCountry(borderCode)
          .subscribe((borderCountryData: Country) => {
            this.borderCountryDetails = [
              ...this.borderCountryDetails,
              borderCountryData,
            ];
          })
      );
  }
}
