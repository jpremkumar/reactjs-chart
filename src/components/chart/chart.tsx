import React from "react";
import ReactApexChart from "react-apexcharts";

export class Chart extends React.Component {
    test: any;
    stateOptions: any;
    stateSeries: any;;
    constructor(props: any) {
        super(props);

        this.test = "Hello";
        this.stateSeries = [{
            name: 'Marine Sprite',
            data: [44, 55, 41, 37, 22, 43, 21]
        }, {
            name: 'Striking Calf',
            data: [53, 32, 33, 52, 13, 43, 32]
        }, {
            name: 'Tank Picture',
            data: [12, 17, 11, 9, 15, 11, 20]
        }, {
            name: 'Bucket Slope',
            data: [9, 7, 5, 8, 6, 9, 4]
        }, {
            name: 'Reborn Kid',
            data: [25, 12, 19, 32, 25, 24, 10]
        }];
        this.stateOptions = {
            chart: {
                type: 'bar',
                height: 350,
                stacked: true,
                stackType: '100%'
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                },
            },
            stroke: {
                width: 1,
                colors: ['#fff'],
            },
            title: {
                text: '100% Stacked Bar',
            },
            xaxis: {
                categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
            },
            tooltip: {
                y: {
                    formatter: function (val: any) {
                        return val + "K";
                    }
                }
            },
            fill: {
                opacity: 1,

            },
            legend: {
                position: 'top',
                horizontalAlign: 'left',
                offsetX: 40,
            }
        };
    }
    render() {
        return (
            <div id="chart">
                <h3>React Chart!</h3>
                <ReactApexChart options={this.stateOptions} series={this.stateSeries} type="bar" height={350} />
            </div>
        );
    }
}