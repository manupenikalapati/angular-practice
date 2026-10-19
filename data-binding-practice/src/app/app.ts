import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

  //string interpolation

  primeMinisterName = "Modi"
  studentName = "Manmohan"
  myImage = "/images/house.jpg"
  d = new Date()
  cname = "nameStyle"
  showName() {
    return this.primeMinisterName
  }

  //property binding

  isdisabled: boolean = true
  playerName = "Sachin Tendulkar"
  inputValue = "Virat Kohli"
  ishidden = true

  //class binding

  isActive:boolean = true

  changeStatus() {
    this.isActive = !this.isActive
  }

  //multiple class bindings on one element
  isactive = true
  isLarge = true
  isHighlighted = true
}
