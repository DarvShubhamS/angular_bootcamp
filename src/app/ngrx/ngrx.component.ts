import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DataModel } from './model/app.model'
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

  //disptaching add data action to add data
  addData() {
    const newUser = new DataModel('new user', Math.round(Math.random() * 100))
    this.store.dispatch(new myActions.AddData(newUser))

  }

  //disptaching delete datat action to delete data
  deleteData() {
    this.store.dispatch(new myActions.RemoveData())
  }

  //setting up state data 
  ngOnInit(): void {
    this.users = this.store.select('usersList')
    console.log(this.store.select('usersList'))
  }

}
