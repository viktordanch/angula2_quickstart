import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule, RouteConfig} from '@angular/router';

import { HeroesComponent }      from './heroes.component';
import { DashboardComponent }      from './dashboard.component';
import { HeroDetailComponent }      from './hero-detail.component';

@RouteConfig([
  { path: '/dashboard', component: Dashboard, as: 'dashboard'}
])

const appRoutes: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'angular2-quickstart',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);