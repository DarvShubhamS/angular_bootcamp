import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { CompOne } from './Compone/compone.component';
import { ComptwoComponent } from './comptwo/comptwo.component'

@NgModule({
  declarations: [
    AppComponent,
    CompOne,
    ComptwoComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
