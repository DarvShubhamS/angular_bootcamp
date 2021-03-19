import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailsComponent } from "./details/details.component";
import { Obs } from "./learning-obs/learning-obs";
import { ListingComponent } from "./listing/listing.component";
import { ViewChildComponent } from './view-child/view-child.component'

const appRoutes: Routes = [
    {
        path: 'listing', component: ListingComponent
    },
    {
        path: 'product/:id', component: DetailsComponent
    },
    {
        path: 'observe', component: Obs
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class RoutingModule { }