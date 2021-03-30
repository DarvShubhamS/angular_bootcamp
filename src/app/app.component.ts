import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/http.service';
import { Data } from './data'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'LearningTesting';
  users: Data[]
  num: number

  constructor(private http: HttpService) { }



  ngOnInit() {
    this.getData()
  }

  getData() {
    this.http.getData().subscribe(res => {
      this.users = res
      console.log(this.users)
    })
  }

  counter(num: number) {
    this.num = num

  }


}





