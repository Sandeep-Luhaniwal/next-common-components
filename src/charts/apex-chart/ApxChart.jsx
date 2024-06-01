"use client"
import React, { Component } from "react";
import Chart from "react-apexcharts";

class ApxChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: "basic-bar"
                },
                xaxis: {
                    categories: [2001, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
                }
            },
            series: [
                {
                    name: "series-1",
                    data: [80, 40, 45, 50, 49, 60, 70, 91]
                }
            ]
        };
    }

    render() {
        return (
            <div className="">
                <div className="row">
                    <div className="">
                        <Chart
                            options={this.state.options}
                            series={this.state.series}
                            type="bar"
                            width="500"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default ApxChart;