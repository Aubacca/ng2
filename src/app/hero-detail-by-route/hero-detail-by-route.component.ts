import { Component, OnInit, Input } from '@angular/core';
// Keep the Input import for now, we'll remove it later:
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { HeroService } from '../service/hero.service';
import { Hero } from '../hero';

@Component({
  moduleId: module.id,
  selector: 'app-hero-detail-by-route',
  templateUrl: './hero-detail-by-route.component.html',
  styleUrls: ['./hero-detail-by-route.component.css']
})
export class HeroDetailByRouteComponent implements OnInit {
  @Input('heroFromList')
  hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}
