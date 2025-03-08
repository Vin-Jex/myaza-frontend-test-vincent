/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { AgCharts } from "ag-charts-react";
import { customTheme, formatFigures } from "../utils/utils";

const AnalyticsChart: React.FC = () => {
  const [options] = useState<any>({
    theme: customTheme,
    data: [
      { month: "Jan", income: 32000, outcome: 22000 },
      { month: "Feb", income: 28000, outcome: 29000 },
      { month: "Mar", income: 30000, outcome: 20000 },
      { month: "Apr", income: 34000, outcome: 23000 },
      { month: "May", income: 41000, outcome: 32000 },
      { month: "Jun", income: 22000, outcome: 18000 },
      { month: "Jul", income: 26000, outcome: 24000 },
      { month: "Aug", income: 28000, outcome: 21000 },
    ],
    series: [
      {
        type: "bar",
        xKey: "month",
        yKey: "income",
        yName: "Income",
        fill: "#46C2E8",
        strokeWidth: 0,
        cornerRadius: 6,
      },
      {
        type: "bar",
        xKey: "month",
        yKey: "outcome",
        yName: "Outcome",
        fill: "#8462F6",
        strokeWidth: 0,
        cornerRadius: 6,
      },
    ],
    axes: [
      {
        type: "category",
        position: "bottom",
        line: {
          stroke: "#4A4A4A",
        },
        label: {
          color: "#fff",
        },
      },
      {
        type: "number",
        position: "left",
        line: {
          stroke: "#4A4A4A",
        },
        label: {
          color: "#fff",
          formatter: (params: any) => formatFigures(params.value),
        },
        gridStyle: [{ stroke: "#4A4A4A" }],
      },
    ],
    tooltip: {
      enabled: true,
      renderer: (params: any) => {
        const value = params.datum[params.series.yKey];
        const formattedValue = formatFigures(value);
        return `<div style="padding: 5px; background-color: #464687; border-radius: 3px;">
                  <b>${params.series.yName}</b><br />
                  Value: ${formattedValue}<br />
                </div>`;
      },
    },
    legend: {
      enabled: true,
      position: "top",
      item: {
        marker: {
          shape: "circle",
          size: 10,
        },
        label: {
          color: "#fff",
        },
      },
    },
  });

  return <AgCharts options={options} />;
};

export default AnalyticsChart;
