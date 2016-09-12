import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';
import { CONFIG } from './config';

@Component({
  selector: 'my-heroes',
  providers: [HeroService],
  templateUrl: CONFIG.rootFolder + 'app/heroes.component.html',
  styleUrls: [CONFIG.rootFolder + 'app/heroes.component.css']
})

export class HeroesComponent implements OnInit  {
  constructor(
    private router: Router,
    private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  title = 'Tour of heroes';


  selectedHero: Hero;
  heroes: Hero[];

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  gotoDetail(hero: Hero): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}


