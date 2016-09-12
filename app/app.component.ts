import { Component } from '@angular/core';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';

import { CONFIG } from './config';

@Component({
  selector: 'my-app',
  template: `
     <h1>{{title}}</h1>
     <nav>
       <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
       <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
     </nav>
     <router-outlet></router-outlet>
   `,
  styleUrls: [CONFIG.rootFolder + 'app/app.component.css'],
})

export class AppComponent {
  title = 'Tour of Heroes';
}
