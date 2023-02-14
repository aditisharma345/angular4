import { Component } from '@angular/core';
import { HERO } from '../hero';
import { HEROES } from '../mock-hero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  selectedHero?: HERO;
  Heroes: HEROES | undefined;
  constructor() {}
  ngOnInit(): void {}
}
