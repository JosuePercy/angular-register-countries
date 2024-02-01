import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'shared-sidebar',
  standalone: true,
  imports: [ RouterModule, RouterOutlet ],
  templateUrl: 'countries.component.html',
})
export default class CountriesComponent {}
