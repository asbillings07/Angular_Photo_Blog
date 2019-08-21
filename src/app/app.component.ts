import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h2>Hello World!</h2>',
  styles: [
    `
      h2 {
        font-family: san-serif;
        font-size: 1.2em;
      }
    `,
  ], // will insert out component into the root of our place holder element
})
export class AppComponent {}
