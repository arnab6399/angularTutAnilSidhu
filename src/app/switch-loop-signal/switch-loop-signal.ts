import { Component,signal } from '@angular/core';

@Component({
  selector: 'app-switch-loop-signal',
  imports: [],
  templateUrl: './switch-loop-signal.html',
  styleUrl: './switch-loop-signal.css',
})
export class SwitchLoopSignal {
  colour = "";
  ChangeColour(divColour: string) {
    this.colour = divColour;
  }

  ShowColour(event: Event) {
    this.colour = (event.target as HTMLInputElement).value;
  }
nameList = ['Arnab', 'Adrita', 'Anil', 'Sidhu', 'Angular', 'TypeScript', 'JavaScript'];
studentList = [
  { name: 'Arnab', age: 24 , address: 'Kolkata'},
  { name: 'Adrita', age: 22 , address: 'Mumbai'},
  { name: 'Anil', age: 30 , address: 'Delhi'},
  { name: 'Sidhu', age: 28 , address: 'Bangalore'},
];

GetName(name: string) {
  alert("Selected Name is: " + name);
}

RemoveName(name: string) {
  let index =this.studentList.findIndex(student => student.name === name);
  this.studentList.splice(index, 1);
}

signalValue = signal(10);
signalIncrement() {
  this.signalValue.update(signalVal => signalVal + 1);
  console.log(this.signalValue());
}
}
