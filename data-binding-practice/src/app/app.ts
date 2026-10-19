import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [RouterOutlet, FormsModule],
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


  //event binding

  count = 0

  toCount(): void{
    this.count = this.count + 1
  }

  

  isPresent: boolean = false
  result: string = "Absent"

  toMarkAttendence() {
    this.isPresent = !this.isPresent
    if(this.isPresent === true){
      this.result = "Present"
    }else{
      this.result = "Absent"
    }
  }


  message: string = "Welcome"

  changeMessage() {
    this.message = "Button Clicked. Hello Everyone!"
  }

  //Two way binding
  employeeName: string = "Manmohan"

  onChangeValue(resultValue: string) {
     console.log(resultValue)
  }

  //Style binding
  textColor: string = ''

  toRed() {
    this.textColor = "Red"
  }
  toBlue() {
    this.textColor = "Blue"
  }
  toGreen() {
    this.textColor = "Green"
  }
}
