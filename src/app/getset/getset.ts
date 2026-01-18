import { Component } from '@angular/core';

@Component({
  selector: 'app-getset',
  imports: [],
  templateUrl: './getset.html',
  styleUrl: './getset.css',
})
export class Getset {
  initialName ="";
  name ="";
  displayName ="";
  email ="";
  getName(value: Event){
    this.initialName = (value.target as HTMLInputElement).value;
    this.name = (value.target as HTMLInputElement).value;
  }

  showName(){
    this.displayName = this.name;
  }

  setName(){
    this.name = "Moumita Charan";
  }

  getEmail(value: string){
    //this.email = (value.target as HTMLInputElement).value;
    this.email = value;
  }

  showEmail(val:string){
    this.email = val;
  }

  setEmail(){
    this.email = "adrita@test.com";
  }

}
