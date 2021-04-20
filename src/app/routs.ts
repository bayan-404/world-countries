import { HomePageComponent } from './components/home-page/home.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { ErrorPageComponent } from './components/error-404/error-page.component';
export let routsTable = [
  { path: '', component: HomePageComponent },
  { path: 'country/:code', component: CountryDetailsComponent },
  { path: '**', component: ErrorPageComponent },
];
