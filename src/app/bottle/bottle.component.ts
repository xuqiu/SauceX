import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottle',
  templateUrl: './bottle.component.html',
  styleUrls: ['./bottle.component.css']
})
export class BottleComponent implements OnInit {
  level;
  constructor() { }

  ngOnInit() {
  }

  showWater(level) {
    console.log(level);
  }
}
