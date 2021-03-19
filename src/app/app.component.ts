import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ViewChildComponent } from './view-child/view-child.component'
import { interval, Subscription } from 'rxjs'
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit, OnDestroy {

  subs: Subscription
  @ViewChild(ViewChildComponent) child1: ViewChildComponent
  title = 'Practice';
  Data: any = {
    Value: ''
  };


  ngOnInit() {
    // this.subs = interval(1000).subscribe(data => {
    //   console.log(data)
    // })
  }
  ngAfterViewInit() {
    this.Data = this.child1.Data
  }

  ngOnDestroy() {
    this.subs.unsubscribe()
  }

}
