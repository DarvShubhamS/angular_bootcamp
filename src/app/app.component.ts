import { AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Authentication } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Advanced-Angular';

  login_status: boolean = false

  constructor(private authservice: Authentication, private routes: Router) {

  }

  ngOnInit() {



  }





  loggedIn() {
    this.authservice.logIn()
    this.login_status = true
    this.routes.navigate(['/dashboard'])
  }

}
