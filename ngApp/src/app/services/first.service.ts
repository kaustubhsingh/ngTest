import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FirstService {
    private searchURL: string;

    constructor(private _http:Http) {

    }

    searchMusic(str:string, type="artist"){
        this.searchURL = "https://api.spotify.com/v1/search?query="+str+"&offset=0&limit=20&type="+type+"&market=US";
        return this._http.get(this.searchURL, {
            headers: {
                "Authorization": Bearer {a41f0df10a654e729a54435761b440fd}
            }})
        .map(res => res.json());


    }
}