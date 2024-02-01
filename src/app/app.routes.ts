import { Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';

export const routes: Routes = [
  {
    path: 'countries',
    loadComponent: () => import('./countries/countries.component'),
    children: [
      {
        path: 'by-capital',
        title: 'By Capital',
        loadComponent: () =>
          import('./countries/pages/by-capital-page/by-capital-page.component'),
      },
      {
        path: 'by-country',
        title: 'By Country',
        loadComponent: () =>
          import('./countries/pages/by-country-page/by-country-page.component'),
      },
      {
        path: 'by-region',
        title: 'By Region',
        loadComponent: () =>
          import('./countries/pages/by-region-page/by-region-page.component'),
      },
      {
        path: 'by/:id',
        title: 'By View',
        loadComponent: () =>
          import('./countries/pages/country-page/country-page.component'),
      },
      {
        path: '**',
        redirectTo: 'by-capital',
      },
    ],
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: 'contact',
    component: ContactPageComponent,
  },

  {
    path: '**',
    redirectTo: 'countries',
  },
];
