import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.css']
})
export class NextComponent implements OnInit {

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
