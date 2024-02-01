import { Component } from '@angular/core';
import { TitleComponent } from '../../../shared/components/title/title.component';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  standalone: true,
  imports: [ TitleComponent, SearchBoxComponent, CountryTableComponent  ],
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export default class ByRegionPageComponent {

  constructor( private countriesService: CountriesService){}

  public countries: Country[] = []

  searchRegion( region: string ){
    this.countriesService.searchRegion(region)
    .subscribe(
      countries => {
        this.countries = countries;
      }
    )
  }

}
