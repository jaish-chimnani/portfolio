/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable security/detect-object-injection */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-nested-ternary */
/* eslint-disable array-callback-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-this-in-sfc */
import Highcharts from "highcharts";
import React, { useEffect } from "react";

export default function Graph() {
  useEffect(() => {
    const options: Highcharts.Options = {
      chart: {
        type: "column",
        // scrollablePlotArea: filter === 'Monthly' ? {
        //     minWidth: 700,
        //     scrollPositionX: getScrollPositionX(),
        //     // scrollPositionX: new Date().getMonth()-1 * 80,
        // } : {
        //     minWidth: 250,
        //     scrollPositionX: 1,
        // }
      },
      title: {
        // text: filter === 'Weekly' ? mapNumberToMonth((new Date()).getMonth() + 1) : '',
      },
      subtitle: {
        text: "",
      },
      xAxis: {
        categories: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
        crosshair: true,
      },
      yAxis: {
        min: 0,
        // max: 20,
        // tickInterval: 5,
        title: {
          text: "No. Of Events",
        },
      },
      tooltip: {
        useHTML: true,
        backgroundColor: "transparent",
        formatter() {
          const backgroundColor = "#ffffff";
          const dotColor = this.color;
          const tooltipHTML = `<div style="background-color: ${backgroundColor}; border-radius: 5px; padding: 5px;">
              <span style="display: inline-block; width: 10px; height: 10px; background-color: ${dotColor}; border-radius: 50%; margin-right: 5px;"></span>
              ${this.key}
              : ${this.y}
            </div>`;
          return tooltipHTML;
        },
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          type: "column",
          name: "Events",
          data: [0, 1, 2, 3, 4],
        },
      ],
      credits: {
        enabled: false,
      },
    };
    Highcharts.chart("column-chart-container", options);
  }, []);
  return (
    <div className="">
      <div>
        <div id="column-chart-container" className="" />
      </div>
    </div>
  );
}
