import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { HEROES } from './mock-heroes';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['app/app.component.css'],
  providers:[ HeroService]
})
export class AppComponent implements OnInit {

  heroes: Hero[];
  sHero: Hero;
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
     this.getHeroes();
    // console.log('SDFSDFSDFSDF' + this.heroes);

  }
  onSelect(hero: Hero): void {
    this.sHero = hero;
    // console.log('SDFSDFSDFSDF' + this.sHero);
  }
    public getHeroes(): void {
      this.heroService.getHeroesSlowley().then(heroes => this.heroes = HEROES);
  }
 }


