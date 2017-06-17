import { Component, OnInit } from '@angular/core';
import { FirstService } from '../services/first.service';
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
  providers: [FirstService]
})
export class SearchbarComponent implements OnInit {

  searchStr:string;

  constructor(private _firstservice: FirstService) { }

  // searchMusic() {


  //   this._firstservice.searchMusic(this.searchStr).subscribe( res => {
  //     console.log(res.artists.items);
  //   })

  // }

  ngOnInit() {
  }

}
