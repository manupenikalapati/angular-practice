import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  primeMinisterName = "Modi"
  studentName = "Manmohan"
  myImage = "/images/house.jpg"
  d = new Date()
  cname = "nameStyle"
  showName() {
    return this.primeMinisterName
  }
}
