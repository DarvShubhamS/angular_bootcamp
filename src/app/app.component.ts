import { AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Authentication } from './auth.service';
import { environment } from '../environments/environment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  hostUrl = environment.hostUrl
  hostName = environment.username
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
