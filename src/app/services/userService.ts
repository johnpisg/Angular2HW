import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { Environment, CurrentEnv} from '../environment/Environment'
import { Usuario } from '../dtos/usuario'

@Injectable()
export class UserService {
    http:Http;
    baseUrl: String;    

    constructor(http:Http){
        this.http = http;
        let cur = new CurrentEnv().getCurrent();
        this.baseUrl = cur.baseUrl;
    }

    getUsers() : Observable<Usuario[]> {  
        let api = this.baseUrl + "api/values/GetUsuarios";
        return this.http.get(api)
            .map(   (res: Response) => res.json() )
            .catch( (error:any) => 
                Observable.throw(error.json().error || 'Server error')
             );
    }
}