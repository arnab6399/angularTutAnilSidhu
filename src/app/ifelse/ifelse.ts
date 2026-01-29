import { Component } from '@angular/core';

@Component({
  selector: 'app-ifelse',
  imports: [],
  templateUrl: './ifelse.html',
  styleUrl: './ifelse.css',
})
export class Ifelse {
  divValue: boolean = true;
  divToggle=true;
  showDiv() {
    this.divValue = true;
  }

  hideDiv() {
    this.divValue = false;
  }

  toggleDiv() {
    this.divValue = !this.divValue;
  }

  toggleTwo() {
    this.divToggle = !this.divToggle;
  }
}
