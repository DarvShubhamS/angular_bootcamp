import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Data } from './app/data'

@Injectable()
export class HttpService {
    constructor(private http: HttpClient) { }

    getData() {
        return this.http.get<Data[]>('https://jsonplaceholder.typicode.com/users')
    }


}