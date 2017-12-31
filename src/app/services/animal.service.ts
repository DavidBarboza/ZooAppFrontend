import { GLOBAL } from './global';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AnimalService{
    public url: string;

    constructor(private _http: Http){
        this.url = GLOBAL.url;
    }

    addAnimal(token, animal){
        let params = JSON.stringify(animal);
        let headers = new Headers({
            'Content-type':'application/json',
            'Authorization': token
        });

        return this._http.post(this.url + 'animals', params, {headers: headers})
                   .map(res => res.json());
    }

    getAnimals(){        
        return this._http.get(this.url + 'animals').map(res => res.json());
    }

    getAnimal(id){
        return this._http.get(this.url + 'animals/'+id).map(res => res.json());
    }

    editAnimal(token, id, animal){
        let params = JSON.stringify(animal);
        let headers = new Headers({
            'Content-type':'application/json',
            'Authorization': token
        });

        return this._http.put(this.url + 'animals/' + id, params,{headers: headers})
                   .map(res => res.json());
    }

    deleteAnimal(token, id){
        let headers = new Headers({
            'Content-type': 'application/json',
            'Authorization': token            
        });

        let options = new RequestOptions({headers:headers});

        return this._http.delete(this.url+'animals/'+id, options).map(res => res.json());
    }
}