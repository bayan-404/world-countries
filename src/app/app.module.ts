import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routsTable } from './routs';

import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { HomePageComponent } from './components/home-page/home.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, CountryDetailsComponent, HomePageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routsTable),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
