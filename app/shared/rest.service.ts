import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/RX'
//import 'rxjs/add/operator/toPromise';

@Injectable()
export class RestService {
    //rest的基础路径
    private restPath = 'app/json';

    constructor(private http: Http) { }

    private makePath(path:string):string{
        return [this.restPath, path].join('/');
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    //获取josn内容
    getJson(path:string): Observable<Response> {
        return this.http.get(this.makePath(path));
    }

}