import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angularTutAnilSidhu');
  name = "Arnab Charan"
  user1 ="Arnab"
  user2 = "Adrita"
}
