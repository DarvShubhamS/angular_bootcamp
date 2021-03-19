import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'child1',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {




  Data: any = {
    Value: ''
  };



  constructor() {

  }

  ngOnInit(): void {
  }

}
