import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Navbar} from './navbar/navbar';
import {Home} from './home/home';
import {Footer} from './footer/footer';

@Component({
  imports: [RouterOutlet, Navbar, Home, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('component-practice');
}
