import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexYAxis,
  ApexXAxis,
  ApexTitleSubtitle,
} from 'ng-apexcharts';
import { stock } from 'src/shared/interfaces/stock.interface';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-stock-history',
  templateUrl: './stock-history.component.html',
  styleUrls: ['./stock-history.component.scss'],
})
export class StockHistoryComponent implements OnInit {
  @ViewChild('chart') chart!: ChartComponent;
  @Input() stock?: stock;
  public chartOptions: Partial<ChartOptions> | any;
  public data1: any[] = [];

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'candle',
          data: this.data1,
        },
      ],
      chart: {
        type: 'candlestick',
        height: 350,
      },
      title: {
        text: 'CandleStick Chart',
        align: 'left',
      },
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
      },
    };
  }

  ngOnInit() {
    debugger;
    console.log(this.stock);
    this.stock?.c.forEach((element, index) => {
      this.data1.push({
        x: this.stock?.t[index],
        y: [
          this.stock?.o[index],
          this.stock?.h[index],
          this.stock?.l[index],
          this.stock?.c[index],
        ],
      });
    });
  }

  public hello() {
    alert('hehe');
  }

  public generateDayWiseTimeSeries(baseval: any, count: any, yrange: any) {
    var i = 0;
    var series = [];
    while (i < count) {
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push([baseval, y]);
      baseval += 86400000;
      i++;
    }
    return series;
  }
}
