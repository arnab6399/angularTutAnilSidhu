import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RulesAndStyles } from "./rules-and-styles/rules-and-styles";
import { Ifelse } from './ifelse/ifelse';
import { Elseif } from "./elseif/elseif";
import { SwitchLoopSignal } from './switch-loop-signal/switch-loop-signal';
import { ContextualVar } from "./contextual-var/contextual-var";
import { TwoWayBindingTodolist } from "./two-way-binding-todolist/two-way-binding-todolist";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RulesAndStyles, Ifelse, Elseif, SwitchLoopSignal, ContextualVar, TwoWayBindingTodolist],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angularTutAnilSidhu');
  name = 'Arnab Charan';
  user1 = 'Arnab';
  user2 = 'Adrita';
}
