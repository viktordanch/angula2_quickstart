import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import { CONFIG } from './config';

@Component({
  selector: 'my-hero-detail',
  templateUrl: CONFIG.rootFolder + 'app/hero-detail.component.html',
  styleUrls: [CONFIG.rootFolder + 'app/hero-detail.component.css'],
  providers: [HeroService],
})

export class HeroDetailComponent implements OnInit {
  @Input()
  hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.heroService.getHero(id)
        .then(hero => this.hero = hero);
    });
  }

  goBack(): void {
    window.history.back();
  }
}