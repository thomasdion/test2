import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['app/app.component.css'],
})
export class AppComponent implements OnInit {

  heroes: Hero[];
  sHero: Hero;
  constructor() {
  }
  ngOnInit() {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    let Heroes: Hero[] = [];
    let test2 = new Hero(11, 'Mr. Nice');
    Heroes.push(test2);
    test2 = new Hero(12, 'Narco');
    Heroes.push(test2);
    test2 = new Hero(13, 'Bombaco');
    Heroes.push(test2);
    test2 = new Hero(14, 'Celeritas');
    Heroes.push(test2);
    test2 = new Hero(15, 'Magneta');
    Heroes.push(test2);
    test2 = new Hero(16, 'RubberMan');
    Heroes.push(test2);
    test2 = new Hero(17, 'Dynama');
    Heroes.push(test2);
    test2 = new Hero(18, 'Dr IQ');
    Heroes.push(test2);
    test2 = new Hero(19, 'Magma');
    Heroes.push(test2);
    test2 = new Hero(20, 'Tornado');
    Heroes.push(test2);
    this.heroes = Heroes;
    // console.log('SDFSDFSDFSDF' + this.heroes);

  }
  onSelect(hero: Hero): void {
    this.sHero = hero;
    // console.log('SDFSDFSDFSDF' + this.sHero);
  }

 }


