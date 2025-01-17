import { Component, EventEmitter, Output } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``,
})
export class ByCapitalPageComponent {
  public countries: Country[] = [];

  constructor(private countriesServices: CountriesService) {}

  searchByCapital(term: string): void {
    this.countriesServices.searchCapital(term).subscribe((countries) => {
      this.countries = countries;
    });
    console.log({ term });
  }
}
