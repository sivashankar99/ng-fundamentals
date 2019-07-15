import { Component } from '@angular/core';

@Component({
  selector: 'app-jqgraphs',
  templateUrl: './jqgraphs.component.html',
  styleUrls: ['./jqgraphs.component.css']
})
export class JqgraphsComponent {
  // 1... bargauge
  values: number[] = [102, 115, 130, 137];
  
  
  // 2 ...Column
  //  sampleData: any =
  // [
  //     { Country: 'China', Population: 1347350000, Percent: 19.18 },
  //     { Country: 'India', Population: 1210193422, Percent: 17.22 },
  //     { Country: 'USA', Population: 313912000, Percent: 4.47 },
  //     { Country: 'Indonesia', Population: 237641326, Percent: 3.38 },
  //     { Country: 'Brazil', Population: 192376496, Percent: 2.74 }
  // ];

  // padding: any = { left: 20, top: 5, right: 20, bottom: 5 };

  // titlePadding: any = { left: 90, top: 0, right: 0, bottom: 10 };

  // xAxis: any =
  // {
  //     dataField: 'Country',
  //     gridLines: { visible: true },
  //     flip: false
  // };

  // valueAxis: any =
  // {
  //     flip: true,
  //     labels: {
  //             visible: true,
  //             formatFunction: (value: string) => {
  //                 return parseInt(value) / 1000000;
  //         }
  //     }
  // };

  // seriesGroups: any[] =
  // [
  //     {
  //         type: 'column',
  //         orientation: 'horizontal',
  //         columnsGapPercent: 50,
  //         toolTipFormatSettings: { thousandsSeparator: ',' },
  //         series: [
  //             { dataField: 'Population', displayText: 'Population (millions)' }
  //         ]
  //     }
  // ];

  //3 .. lineseries
  months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    source: any =
    {
        datatype: "csv",
        datafields: [
            { name: 'Date' },
            { name: 'S&P 500' },
            { name: 'NASDAQ' }
        ],
        url: '../../assets/nasdaq_vs_sp500.txt'
    };

    dataAdapter: any = new jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + this.source.url + '" : ' + error); } });

    padding: any = { left: 10, top: 5, right: 10, bottom: 5 };

    titlePadding: any = { left: 50, top: 0, right: 0, bottom: 10 };

	getWidth() : any {
		if (document.body.offsetWidth < 1000) {
			return '90%';
		}
		
		return 1000;
	}
	
    xAxis: any =
    {
        dataField: 'Date',
        formatFunction: (value: any) => {
            return value.getDate() + '-' + this. months[value.getMonth()] + '-' + value.getFullYear();
        },
        type: 'date',
        baseUnit: 'month',
        valuesOnTicks: true,
        minValue: '01-01-2014',
        maxValue: '31-12-2014',
        tickMarks: {
            visible: true,
            interval: 1,
            color: '#BCBCBC'
        },
        unitInterval: 1,
        gridLines: {
            visible: true,
            interval: 3,
            color: '#BCBCBC'
        },
        labels: {
            angle: -45,
            rotationPoint: 'topright',
            offset: { x: 0, y: -25 }
        }
    };

    valueAxis: any =
    {
        visible: true,
        title: { text: 'Daily Closing Price<br>' },
        tickMarks: { color: '#BCBCBC' }
    };

    seriesGroups: any =
    [
        {
          type: 'line',
          series: [
              { dataField: 'NASDAQ', displayText: 'NASDAQ', opacity: 0.7 },
              { dataField: 'S&P 500', displayText: 'S&P 500', opacity: 0.8 }
            ]
        }
    ];
}
