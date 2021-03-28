import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Authentication } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authservice: Authentication, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        let login_status: boolean = this.authservice.isAuthenticated();

        if (login_status) {
            return true
        }
        else {
            this.router.navigate(['/not-found'])
            alert('no permission found , please log in')
        }
    }


}