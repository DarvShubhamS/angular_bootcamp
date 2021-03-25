import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Authentication } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authservice: Authentication, private routes: Router) { }

  ngOnInit(): void {
  }

  loggedOut() {
    this.authservice.logOut()
    this.routes.navigate(['/'])

  }

}
