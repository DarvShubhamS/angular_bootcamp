import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learning-directive',
  templateUrl: './learning-directive.component.html',
  styleUrls: ['./learning-directive.component.css']
})
export class LearningDirectiveComponent implements OnInit {

  constructor() { }

  show = false;
  setClass
  data: String = "deafult_value";

  list = [{
    name: "user1",
    id: 1
  }, {
    name: "user2",
    id: 2
  }, {
    name: "user3",
    id: 3
  }]

  onShow() {
    this.show = true
  }

  setClassRed() {
    this.setClass = "red"
  }

  setClassGreen() {
    this.setClass = "green"
  }

  ngOnInit(): void {
  }

}
