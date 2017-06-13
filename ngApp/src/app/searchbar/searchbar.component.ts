import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  searchStr:string;

  constructor() { }

  searchMusic() {


    console.log("Test");

  }

  ngOnInit() {
  }

}
