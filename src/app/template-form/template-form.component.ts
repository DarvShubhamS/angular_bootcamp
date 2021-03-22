import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor() { }

  gender = ['male', 'female']
  FormValue
  default_city = "Noida"
  onSubmit(form) {
    console.log(form.value)
    alert("Check Console For Value")

  }

  ngOnInit(): void {
  }

}
