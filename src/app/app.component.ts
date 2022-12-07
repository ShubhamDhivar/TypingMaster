import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = faker.hacker.phrase();
  userInput = "";
  
  onInput(vada: Event) {
    this.userInput = (vada.target as HTMLInputElement).value
    console.log(this.userInput)
  }

  compare(randomLetter: string, userInput: string){
    if(!userInput) return 'pending';

    return randomLetter === userInput ? 'correct' : 'incorrect';
  }
  
  
}
