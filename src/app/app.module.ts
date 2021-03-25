import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { StoreModule } from '@ngrx/store'
import { AppComponent } from './app.component';
import { Authentication } from './auth.service';
import { NotFoundLandingComponent } from './not-found-landing/not-found-landing.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth-guard.service';
import { MyHttp } from './http.service';
import { MyResolver } from './resolver.service';
import { ResolversComponent } from './resolvers/resolvers.component';
import { myReducer } from './ngrx/reducer/myreducer.reducer';
import { NgrxComponent } from './ngrx/ngrx.component';

let myRoutes: Routes = [

  {
    path: 'dashboard', canActivate: [AuthGuard], component: HomeComponent
  },
  {
    path: 'not-found', component: NotFoundLandingComponent
  },
  {
    path: 'resolver', resolve: { 'myData': MyResolver }, component: ResolversComponent
  },
  {
    path: 'learning-ngrx', component: NgrxComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NotFoundLandingComponent,
    HomeComponent,
    ResolversComponent,
    NgrxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // importing store
    StoreModule.forRoot({ usersList: myReducer }),
    RouterModule.forRoot(myRoutes)
  ],
  providers: [Authentication, AuthGuard, MyHttp, MyResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
