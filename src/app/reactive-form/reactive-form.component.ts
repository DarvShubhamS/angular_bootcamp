import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }
  gender = ['male', 'female']
  myForm: FormGroup
  pattern_email = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
  //atleast one uppercase,one lower case and min length should be 8
  pattern_pass = "(?=.*[a-z])(?=.*[A-Z]).{8,}"
  ngOnInit(): void {
    //initilizing form
    this.myForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.pattern(this.pattern_email)]),
      'password': new FormControl(null, [Validators.required, Validators.pattern(this.pattern_pass)]),
      'gender': new FormControl('male', [Validators.required]),
      'city': new FormControl('Noida', [Validators.required]),
      'file': new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    alert("please check console to check submitted data")
    console.log(this.myForm.value)
  }

}
