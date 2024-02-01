import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-country-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country-page.component.html',
  styles: ``,
})
export default class CountryPageComponent implements OnInit {
  public lenguajes: string[] = [
    'ara',
    'bre',
    'ces',
    'cym',
    'deu',
    'est',
    'fin',
    'fra',
    'hrv',
    'hun',
    'ita',
    'jpn',
    'kor',
    'kor',
  ];

  public country?: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) =>
          this.countriesService.searchCountryByAlphaCode(id)
        )
      )
      .subscribe((country) => {
        if (!country) return this.router.navigateByUrl('');

        console.log('Tenemos un País');
        return (this.country = country);
      });
  }
}
