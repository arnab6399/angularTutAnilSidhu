import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  imports: [],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
   name:string|number = "Arnab Charan"
   otherValue:any = "Adrita"

   updateName() {
     this.name = 20
    console.log(this.name);
     this.otherValue = true;
    console.log(this.Sum(20,40));

   }

   Sum(a:number,b:number) {
     return a + b;
   }
}
