import { AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Authentication } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'Advanced-Angular';

  login_status: boolean = false

  constructor(private authservice: Authentication, private routes: Router) {

  }

  ngOnInit() {
    this.login_status = this.authservice.loggedIn


  }

  ngDoCheck() {

    this.login_status = false
    console.log(this.login_status)
  }




  loggedIn() {
    this.authservice.logIn()
    this.login_status = true
    this.routes.navigate(['/dashboard'])
  }

}
