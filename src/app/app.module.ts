import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Parent } from './parent/parent.component';
import { ChildComponent } from './child/child.component'

@NgModule({
  declarations: [
    AppComponent,
    Parent,
    ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
