import { Component } from '@angular/core';
import {Sidebar} from '../sidebar/sidebar';

@Component({
  imports: [Sidebar],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
