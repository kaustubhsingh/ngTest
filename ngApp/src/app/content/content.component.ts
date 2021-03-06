import { Component, OnInit } from '@angular/core';
import { FirstService } from '../services/first.service';

declare function require(name:string);
var Highcharts = require('highcharts');

// Load module after Highcharts is loaded
require('highcharts/modules/exporting')(Highcharts);

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



        console.log("chart called...");

Highcharts.chart('container1', {

    title: {
        text: 'Highcharts Line Chart'
    },

    subtitle: {
    
    },

    yAxis: {
        title: {
            text: 'Values'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            pointStart: 2010
        }
    },

    series: [{
        name: 'Metric A',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }, {
        name: 'Metric B',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    }, {
        name: 'Metric C',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    }, {
        name: 'Metric D',
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
    }, {
        name: 'Metric E',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
    }]

});

    }


}
