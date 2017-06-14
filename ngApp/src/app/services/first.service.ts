import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FirstService {
    private searchURL: string;

    constructor(private _http:Http) {

    }

    searchMusic(str:string, type="artist"){
        this.searchURL = "https://api.spotify.com/search?query="+str+"&offset=0&limit=20&type="+type+"&market=US";
        return this._http.get(this.searchURL)
        .map(res => res.json());


    }
}