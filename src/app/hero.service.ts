import { Injectable } from '@angular/core';
import { MessageService } from '../app/message.service';
import { Observable, of } from 'rxjs';
import { HERO } from '../app/hero';
import { HEROES } from '../app/mock-hero';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private MessageService: MessageService) {}
  getHero(): Observable<HERO[]> {
    const heros = of(HEROES);
    this.MessageService.add('heros:fetched heros');
    return heros;
  }
}
