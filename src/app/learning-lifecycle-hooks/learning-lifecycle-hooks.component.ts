import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-learning-lifecycle-hooks',
  templateUrl: './learning-lifecycle-hooks.component.html',
  styleUrls: ['./learning-lifecycle-hooks.component.css']
})
export class LearningLifecycleHooksComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  show = false;
  @ViewChild('heading_one', { static: false }) head: ElementRef
  @ContentChild('projected', { static: false }) content_projected_ref: ElementRef
  checking_destroy() {
    this.show = true
  }

  checking_destroy_act() {
    this.show = false
  }

  @Input() data_from_parent: string;

  // @ContentChild('projected',{static:false}) 

  constructor() {
    console.log(`Contructor is called first
before ant lifecycle generally used with services `)
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("Ng On Changes is called everytime when input bind property is changed")
    console.log(changes)
  }

  ngOnInit(): void {
    console.log(`Ng On Init Called , Called only Once . Can Be used for initializing default values
making http request and rendering requested data on ui  `)
  }

  ngDoCheck(): void {
    console.log("Do Check Called , If Any type of Change in our component is detected")
  }

  ngAfterContentInit() {
    console.log("Ng After Content Init Called Once , After Content have been Projected")
    console.log(this.content_projected_ref.nativeElement)
  }

  ngAfterContentChecked() {
    console.log("Ng After Content Checked Called If Any Change is detected in Our Content")

  }

  ngAfterViewInit() {
    console.log("Ng View Init Called After Whole Component is fully rendered")
    console.log(this.head.nativeElement)
  }

  ngAfterViewChecked() {
    console.log("Ng After View Called If any change detected")
  }

  ngOnDestroy() {
    console.log("Ng Destroyed Called This Method is called after our component is destroyed")
  }

}
