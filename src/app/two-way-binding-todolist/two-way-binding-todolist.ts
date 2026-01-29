import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding-todolist',
  imports: [FormsModule],
  templateUrl: './two-way-binding-todolist.html',
  styleUrl: './two-way-binding-todolist.css',
})
export class TwoWayBindingTodolist {
  name=""
  taskList: string[] = [];
  task="";

  addTask() {

      this.taskList.push(this.task.trim());
      this.task = "";
  }

  deleteTask(index: number) {
    //this.taskList = this.taskList.filter(i=>i!==this.taskList[index]);
    this.taskList.splice(index,1);
  }
}
