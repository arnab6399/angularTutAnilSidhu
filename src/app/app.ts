import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Profile } from './profile/profile';
import { Counter } from './counter/counter';
import { Events } from "./events/events";
import { Getset } from "./getset/getset";
import { RulesAndStyles } from "./rules-and-styles/rules-and-styles";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RulesAndStyles],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angularTutAnilSidhu');
  name = 'Arnab Charan';
  user1 = 'Arnab';
  user2 = 'Adrita';
}
