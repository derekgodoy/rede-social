import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Posts } from "../model/posts";
import { Injectable } from "@angular/core";
import { APICONFIG } from "../config/api.config";

@Injectable()
export class PostsService {

    constructor(private http: HttpClient){ }

    getPosts(): Observable<Posts[]>{
        return this.http.get<Posts[]>(`${APICONFIG.url}`);
    }

}