import { Component } from '@angular/core';
import { TitleComponent } from '../../../shared/components/title/title.component';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { CountryTableComponent } from '../../components/country-table/country-table.component';

@Component({
  selector: 'app-by-country-page',
  standalone: true,
  imports: [TitleComponent, SearchBoxComponent, CountryTableComponent],
  templateUrl: './by-country-page.component.html',
})
export default class ByCountryPageComponent {

  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  searchCountry(term: string) {
    this.countriesService.searchCountry(term)
      .subscribe( country => {
        this.countries = country
      })
  }
}
