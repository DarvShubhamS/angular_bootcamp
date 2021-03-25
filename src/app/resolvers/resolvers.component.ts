import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resolvers',
  templateUrl: './resolvers.component.html',
  styleUrls: ['./resolvers.component.css']
})
export class ResolversComponent implements OnInit {
  myData: []
  constructor(private routes: ActivatedRoute) { }

  ngOnInit(): void {
    this.routes.data.subscribe(data => {
      this.myData = data['myData']
      alert('Data Loaded Via Resolvers')
      console.log(this.myData)
    })
  }

}
