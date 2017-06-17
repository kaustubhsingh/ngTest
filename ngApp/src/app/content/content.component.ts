import { Component, OnInit } from '@angular/core';
import { FirstService } from '../services/first.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [FirstService]
})
export class ContentComponent implements OnInit {

  constructor(private _firstservice: FirstService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this._firstservice.renderChart();
  }

}
