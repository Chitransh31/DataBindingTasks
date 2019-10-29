import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output()
  public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendTextToParent(value) {
    console.log(value);
    this.childEvent.emit(value);
  }

}
