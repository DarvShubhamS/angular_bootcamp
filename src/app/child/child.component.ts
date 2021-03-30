import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  @Input() data: string

  @Output() childevent = new EventEmitter<number>()

  sendData() {
    this.childevent.emit(5)
  }
  ngOnInit(): void {
  }

}
