import { Component, Input, OnInit, ViewChild } from '@angular/core';
import * as ApexCharts from 'apexcharts';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexYAxis,
  ApexXAxis,
  ApexTitleSubtitle,
} from 'ng-apexcharts';
import { NgxSpinnerService } from 'ngx-spinner';
import { EventService } from 'src/app/services/event.service';
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
  @Input() companyName?: string = '';
  public chartOptions: Partial<ChartOptions> | any;
  public data1: any[] = [];

  constructor(private eventService: EventService) {
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
    if (this.stock!.c.length) {
      for (let index = 0, len = this.stock!.c.length; index < len; ++index) {
        this.data1.push({
          x: this.stock?.t[index],
          y: [
            this.stock?.o[index],
            this.stock?.h[index],
            this.stock?.l[index],
            this.stock?.c[index],
          ],
        });
      }
    }
  }

  public updateStocks(): void {
    console.log('das');
    for (let index = 0, len = this.stock!.c.length; index < len; ++index) {
      this.data1.push({
        x: this.stock?.t[index],
        y: [
          this.stock?.o[index],
          this.stock?.h[index],
          this.stock?.l[index],
          this.stock?.c[index],
        ],
      });
    }
  }
}
