import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shadowdom-encapsulation',
  template: `
    <h2>ShadowDom</h2>
    <div class="ShadowDom-message">ShadowDom encapsulation</div>
  `,
  styles: ['h2, .ShadowDom-message { color: blue; }'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ShadowdomEncapsulationComponent {}
