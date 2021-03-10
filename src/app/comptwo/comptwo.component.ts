import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comptwo',
  templateUrl: './comptwo.component.html',
  styleUrls: ['./comptwo.component.css']
})
export class ComptwoComponent implements OnInit {

  //initial username
  data: String = "";

  //initial boolean value to set button to disabled
  active: boolean = true

  //checking data to enable or disable a button
  checkdata(event: Event) {
    if ((<HTMLInputElement>event.target).value !== "") {
      this.active = false
      console.log((<HTMLInputElement>event.target).value)
    }
    else {
      this.active = true
    }
  }

  // reseting the data
  reset() {
    this.data = ""
  }


  constructor() {

  }

  ngOnInit(): void {
  }




}
