import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RulesAndStyles } from "./rules-and-styles/rules-and-styles";
import { Ifelse } from './ifelse/ifelse';
import { Elseif } from "./elseif/elseif";
import { SwitchLoopSignal } from './switch-loop-signal/switch-loop-signal';
import { ContextualVar } from "./contextual-var/contextual-var";
import { TwoWayBindingTodolist } from "./two-way-binding-todolist/two-way-binding-todolist";
import { DynamicStyling } from "./dynamic-styling/dynamic-styling";
import { DirectiveExample } from "./directive-example/directive-example";
import { Page1 } from "./page1/page1";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RulesAndStyles, Ifelse, Elseif, SwitchLoopSignal, ContextualVar, TwoWayBindingTodolist, DynamicStyling, DirectiveExample, Page1],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angularTutAnilSidhu');
  name = 'Arnab Charan';
  user1 = 'Arnab';
  user2 = 'Adrita';
}
