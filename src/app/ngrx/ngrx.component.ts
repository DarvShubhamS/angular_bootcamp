import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DataModel } from './model/mymodel.model'
import { AppState } from './state/app.state'
import * as myActions from './actions/myactions.action'
@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx.component.html',
  styleUrls: ['./ngrx.component.css']
})
export class NgrxComponent implements OnInit {
  users: Observable<DataModel[]>
  constructor(private store: Store<AppState>) { }

  addData() {
    const newUser = new DataModel('new user', Math.round(Math.random() * 100))
    this.store.dispatch(new myActions.AddData(newUser))
    // console.log(this.store.select('tutorial'))
  }
  deleteData() {
    this.store.dispatch(new myActions.RemoveData())
  }

  ngOnInit(): void {
    this.users = this.store.select('usersList')
    console.log(this.store.select('usersList'))
  }

}
