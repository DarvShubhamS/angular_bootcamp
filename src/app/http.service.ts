import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
@Injectable()

export class HttpService implements OnInit {
    constructor(private http: HttpClient) { }
    url = 'https://jsonplaceholder.typicode.com/posts/1/comments'
    getData() {
        return this.http.get(this.url)
    }

    ngOnInit() {

    }
}