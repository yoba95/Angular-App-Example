import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',

})
export class Counter {

  counter: number = 0;

  setCounter(): void {
    this.counter = this.counter +1;
  }
}
