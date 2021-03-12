import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { Parent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { LearningDirectiveComponent } from './learning-directive/learning-directive.component';
import { MydirectiveDirective } from './mydirective.directive'

@NgModule({
  declarations: [
    AppComponent,
    Parent,
    ChildComponent,
    LearningDirectiveComponent,
    MydirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
