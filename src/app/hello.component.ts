import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
  <h1>Title: {{name}}!</h1>
  <h1>What did the cheese say when it looked inthe mirror?</h1>
  <p>Halloumi (hello me)</p>
  `,
  styles: [`
  h1 { font-family: Lato; }
  `]
})
export class HelloComponent  {
  @Input() name: string;
}
