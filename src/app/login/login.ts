import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterOutlet],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
clickEvent(){
  console.log("Button clicked in Login Component");
  this.anotherFunction();
}
anotherFunction(){
  console.log("Another function in Login Component");
}
}
