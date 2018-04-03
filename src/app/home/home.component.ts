import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  counter = 0;
  constructor() { }

  ngOnInit() {
  }

  add() {
    this.counter++;
  }
  subtract() {
    this.counter--;
  }

}
