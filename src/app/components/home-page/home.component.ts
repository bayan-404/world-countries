import { Component, OnInit } from '@angular/core';
import { AllContriesService } from '../../all-contries.service';
import { Country } from '../../models/Country';
@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomePageComponent implements OnInit {
  continents = [
    { name: 'all' },
    { name: 'Asia' },
    { name: 'Africa' },
    { name: 'Oceania' },
    { name: 'Americas' },
    { name: 'Europe' },
  ];
  searchCountry: string = '';
  continentCountries: Array<Country>;
  selectedContinent = this.continents[0].name;
  allContries: Array<Country>;
  constructor(private allContriesService: AllContriesService) {
    this.allContries = [];
    this.continentCountries = [];
  }

  ngOnInit(): void {
    this.allContriesService.getAllCountries().subscribe((res: any) => {
      this.allContries = res;
      this.onSearch();
    });
    console.log(this.searchCountry);
  }

  onSearch() {
    this.continentCountries = this.filterbyregion(
      this.searchValue(this.allContries)
    );
  }

  searchValue(contries: Array<Country>) {
    return contries.filter((item: Country) => {
      if (this.searchCountry.trim() === '') {
        return true;
      } else {
        return item.name
          .toLowerCase()
          .includes(this.searchCountry.trim().toLocaleLowerCase());
      }
    });
  }

  filterbyregion(contries: Array<Country>) {
    return contries.filter((country: Country) => {
      if (
        this.selectedContinent === 'all' ||
        this.selectedContinent === country.region
      ) {
        return true;
      } else {
        return false;
      }
    });
  }
}
