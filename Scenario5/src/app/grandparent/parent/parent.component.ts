import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  public receivedText = "";

  @Output()
  public parentEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendTextToGrand(event) {
    console.log(event);
    this.parentEvent.emit(event);
  }

}
