import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription, interval } from "rxjs";
import { filter, map, tap, find } from 'rxjs/operators'

@Component({
    selector: 'app-obs',
    templateUrl: './learning-obs.html'
})

export class Obs implements OnInit, OnDestroy {
    subs: Subscription
    constructor() { }

    ngOnInit() {
        this.subs = interval(1000).pipe(filter(data => {
            return data > 5
        }), map(data => data * 5),
            tap(el => {
                console.log('tapped:-' + el)
            }),
            find(el => el % 2 == 0)
        ).subscribe(data => {
            console.log(data)
        })
    }

    ngOnDestroy() {
        this.subs.unsubscribe()
    }
}