import { Component, Input, EventEmitter, Output, ViewChild, ElementRef, OnInit } from "@angular/core";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  val;
  @ViewChild('text', { static: true }) text: ElementRef

  //event we are listening 
  @Output() eventFromChild = new EventEmitter<number>()
  @Output('e2') eventtwo = new EventEmitter<string>()


  //getting data from parents
  @Input() data: string

  //emitting event and passing data
  event_triggered() {
    this.eventFromChild.emit(6)
  }

  // different events

  Onkeyup() {
    alert("key up pressed")
    this.eventtwo.emit("shubham")
  }

  Onkeydown() {
    alert("key down pressed")
  }

  Onmousentered() {
    alert("mouse moved here")
  }

  OnBlur() {
    alert("moved out of focus")
  }

  fnc(dta) {
    console.log(dta.value)
    this.val = dta.value
  }

  fnc1() {
    console.log(this.text.nativeElement.value)
  }

  ngOnInit(): void {
  }

}
