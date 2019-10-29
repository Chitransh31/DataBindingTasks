import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Output()
  public child1Event = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  
  sendTextToParent(enteredText) {
    this.child1Event.emit(enteredText);
  }

}
