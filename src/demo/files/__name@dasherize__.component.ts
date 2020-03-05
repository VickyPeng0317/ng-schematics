import { Component } from '@angular/core';

@Component({
  selector: '<%= dasherize(name) %>',
  template: `<h1>Hello {{name}}!</h1>`,
})
export class <%= classify(name) %>Component  {
}
