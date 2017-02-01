import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  ComponentCounterValue:number=10;
  counter = this.ComponentCounterValue;
}
