import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
  clickme(value: MouseEvent) {
    console.log(value.type);
    console.log(value);
    console.log((value.target as HTMLButtonElement).name);

  }

  eventMouseOver(value: MouseEvent) {
    console.log('Mouse Over Event Triggered', value.type);
    console.log(value.target);
  }

  eventMouseLeave(value: MouseEvent) {
    console.log('Mouse Leave Event Triggered', value.type);
    console.log(value);
  }

  eventKeyPress(value: Event) {
    console.log('Key Press Event Triggered', value.type);
    console.log((value.target as HTMLInputElement).value);
  }

  eventFocus(value: FocusEvent) {
    console.log('Focus Event Triggered', value.type);
    console.log(value);
  }

  eventOnBlur(value: Event) {
    console.log('Blur Event Triggered', value.type);
    console.log(value);
    console.log((value.target as HTMLInputElement).name);
  }
}
