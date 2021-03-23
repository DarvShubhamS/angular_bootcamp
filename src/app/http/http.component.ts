import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(private httpservice: HttpService) { }
  loading: boolean = true

  data = {}

  //using service to get data
  getPosts() {
    this.httpservice.getData().subscribe(res => {
      this.loading = false
      this.data = res
      console.log(this.data)
    }, err => {
      console.log(err)
    })
  }

  ngOnInit(): void {
    this.getPosts()

  }

}
