import { Component } from '@angular/core';

@Component({
  selector: 'app-elseif',
  imports: [],
  templateUrl: './elseif.html',
  styleUrl: './elseif.css',
})
export class Elseif {
  divColor: string = "";
  changeDivColour(color: string) {

      this.divColor = color;
  }

  changeDivColourFromInput(event: any) {
      this.divColor = event.target.value;
  }
}
