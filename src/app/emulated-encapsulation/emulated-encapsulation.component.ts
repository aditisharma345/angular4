import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-Emulated-encapsulation',
  template: `
    <h2>Emulated</h2>
    <div class="Emulated-message">Emulated encapsulation</div>
    <app-no-encapsulation></app-no-encapsulation>
    <app-shadowdom-encapsulation></app-shadowdom-encapsulation>
  `,
  styles: ['h2, .Emulated-message { color: green; }'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class EmulatedEncapsulationComponent {}
