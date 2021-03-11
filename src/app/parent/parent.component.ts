import { Component, Input, EventEmitter, Output, ViewChild, ElementRef } from "@angular/core";


@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html'

})

export class Parent {
    title = 'MyApp2';
    total: number
    prop_from_parent: string = "property from root parent"

    add(event_data: number) {
        this.total = event_data + 10;
        alert("data recieved from parent")
    }

    str(event_d: string) {
        alert(`data recived is + ${event_d}`)
    }


}