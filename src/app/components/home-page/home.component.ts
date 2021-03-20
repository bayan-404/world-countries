import { Component, OnInit } from '@angular/core';
import { AllContriesService } from '../../all-contries.service';
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
  allContries: any;
  continentContreis: any = [];
  constructor(private allContriesService: AllContriesService) {}

  ngOnInit(): void {
    this.allContriesService.getAllCountries().subscribe((res) => {
      this.allContries = res;
      this.continentContreis = res;
    });
  }

  filterbyregion(event: string) {
    console.log(event);
    this.selectedContinent = event;

    this.continentContreis = this.allContries.filter((country: any) => {
      if (event === 'all') {
        return true;
      } else {
        return country.region === event;
      }
    });
    console.log(this.continentContreis);
  }
}
