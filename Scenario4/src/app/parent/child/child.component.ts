import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  public enteredText = "";

  @Output()
  public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendText() {
    this.childEvent.emit(this.enteredText);
  }

}
