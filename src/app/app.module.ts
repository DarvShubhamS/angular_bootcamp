import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpComponent } from './http/http.component';
import { HttpClientModule } from '@angular/common/http'
import { HttpService } from './http.service';
import { VowelsPipe } from './vowels.pipe';
import { PipesComponent } from './pipes/pipes.component';

let MyRoutes: Routes = [
  {
    path: 'template-form', component: TemplateFormComponent
  },
  {
    path: 'reactive-form', component: ReactiveFormComponent
  },
  {
    path: 'http', component: HttpComponent
  },
  {
    path: 'pipes', component: PipesComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    NavigationComponent,
    HttpComponent,
    VowelsPipe,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(MyRoutes)
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
