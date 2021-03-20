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
  selectedContinent = this.continents[0].name;
  allContries: Array<Country>;
  continentContreis: Array<Country>;
  constructor(private allContriesService: AllContriesService) {
    this.allContries = [];
    this.continentContreis = [];
  }

  ngOnInit(): void {
    this.allContriesService.getAllCountries().subscribe((res: any) => {
      this.allContries = res;
      this.continentContreis = res;
    });
  }

  filterbyregion(event: string) {
    console.log(event);
    this.selectedContinent = event;

    this.continentContreis = this.allContries.filter((country: Country) => {
      if (event === 'all') {
        return true;
      } else {
        return country.region === event;
      }
    });
    console.log(this.continentContreis);
  }
}
