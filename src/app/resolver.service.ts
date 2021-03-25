import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { MyHttp } from "./http.service";
@Injectable()
export class MyResolver implements Resolve<any> {

    constructor(private dataservice: MyHttp) {

    }


    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot) {

        return this.dataservice.getData()
    }
}