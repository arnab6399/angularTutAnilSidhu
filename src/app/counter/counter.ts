import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  counter = 0;
  handleIncrement() {
    this.counter = this.counter + 1;
  }
  handleReset() {
    this.counter = 0;
  }
  handleDecrement() {
    if(this.counter > 0)
    this.counter = this.counter - 1;
  }

  handleCounter(val:string) {
    if(val === 'increment') {
      this.handleIncrement();
    } else if(val === 'decrement') {
      this.handleDecrement();
    } else {
      this.handleReset();
    }
  }
}
