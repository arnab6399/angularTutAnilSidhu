import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Profile } from './profile/profile';
import { Counter } from './counter/counter';
import { Events } from "./events/events";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, Signup, Counter, Events],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angularTutAnilSidhu');
  name = 'Arnab Charan';
  user1 = 'Arnab';
  user2 = 'Adrita';
}
