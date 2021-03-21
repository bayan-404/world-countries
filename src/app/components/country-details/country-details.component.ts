import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryDetailsService } from './country-details.service';
import { Country } from '../../models/Country';
@Component({
  selector: 'country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css'],
})
export class CountryDetailsComponent implements OnInit {
  countryName: string = '';
  countryDetails: any = {};
  CountryBorders: any = [];
  isLoading: boolean = true;
  constructor(
    private route: ActivatedRoute,
    private countryDetailsSevice: CountryDetailsService
  ) {
    this.countryDetails = {};
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      this.countryDetailsSevice
        .getCountry(params.get('code'))
        .subscribe((contryData: any) => {
          this.countryDetails = contryData;
          this.CountryBorders = this.countryDetails.borders;
          this.countryDetails
            ? (this.isLoading = false)
            : (this.isLoading = true);
        });
    });
  }
}
