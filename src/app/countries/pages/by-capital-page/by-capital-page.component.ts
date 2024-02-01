import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { TitleComponent } from '../../../shared/components/title/title.component';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { CountryTableComponent } from '../../components/country-table/country-table.component';

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [ SearchBoxComponent, TitleComponent, CountryTableComponent ],
  templateUrl: './by-capital-page.component.html',
})
export default class ByCapitalPageComponent {

  public countries: Country[] = [];

  constructor( private countriesService: CountriesService ){}

  searchByCapital( term: string) {
    this.countriesService.searchCapital(term)
      .subscribe( countries => {
        this.countries = countries;
      })
  }

}
