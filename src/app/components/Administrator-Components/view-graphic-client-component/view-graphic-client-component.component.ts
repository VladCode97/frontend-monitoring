import { Component, OnInit, Inject } from '@angular/core';
import { Label } from 'ng2-charts';
import { ChartDataSets } from 'chart.js';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-view-graphic-client-component',
  templateUrl: './view-graphic-client-component.component.html',
  styleUrls: ['./view-graphic-client-component.component.css']
})
export class ViewGraphicClientComponent implements OnInit {

  public lineChartLabels: Label[];
  public lineChartData: ChartDataSets[] = [];
  public lineChartLegend = true;
  public lineChartType = 'line';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.lineChartData = [];
    this.lineChartLabels = ['1%', '2.5%', '10%', '25%', '50%', '75%', '90%', '97.5%', '100%'];
    const { p1, p2_5, p10, p25, p50, p75, p90, p97_5, p99_999 } = data.avarageClient[0];
    this.lineChartData.push({ data: [p1, p2_5, p10, p25, p50, p75, p90, p97_5, p99_999], label: '' });
    console.log(this.lineChartData);

  }

  ngOnInit() {
  }

}
