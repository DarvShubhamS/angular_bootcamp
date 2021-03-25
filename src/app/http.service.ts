import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class MyHttp {
    constructor(private http: HttpClient) {

    }

    private usersEndpoint = 'https://jsonplaceholder.typicode.com/users';
    getData(): Observable<any> {
        return this.http.get(this.usersEndpoint);
    }

}