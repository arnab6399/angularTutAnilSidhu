import { NgFor, NgIf, NgSwitch,NgSwitchCase,NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-example',
  imports: [NgFor,NgIf,NgSwitch,NgSwitchCase,NgSwitchDefault],
  templateUrl: './directive-example.html',
  styleUrl: './directive-example.css',
})
export class DirectiveExample {
  students = ['Alice', 'Bob', 'Charlie'];
  studentsData = [
    { name: 'Alice', age: 20, email: 'alice@example.com', skills: ['JavaScript', 'Angular','React'] },
    { name: 'Bob', age: 22, email: 'bob@example.com', skills: ['Java', 'Spring','Jsp'] },
    { name: 'Charlie', age: 23, email: 'charlie@example.com', skills: ['Dotnet', 'Middleware','Windows Service'] }
  ];

  show=true;
  isLogIn=false;
  block=0;
  updateBlockVal(){
    this.block = this.block + 1;
  }

  color = "black";

  ChangeColor(color:string){
    this.color = color;
  }
}
