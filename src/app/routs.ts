import { HomePageComponent } from './components/home-page/home.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';
export let routsTable = [
  { path: '', component: HomePageComponent },
  { path: 'country/:code', component: CountryDetailsComponent },
];
