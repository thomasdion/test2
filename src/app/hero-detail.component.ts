import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',

  // template: `
  //    <div *ngIf="hero">
  //    <h2>{{hero.Name}} details!</h2>
  //    <div><label>id: </label>{{hero.ID}}</div>
  //    <div>
  //      <label>name: </label>
  //      <input [(ngModel)]="hero.Name" placeholder="name"/>
  //    </div>
  //  </div>
  //    `
   })

   export class HeroDetailComponet {

    @Input() hero: Hero;

   }
