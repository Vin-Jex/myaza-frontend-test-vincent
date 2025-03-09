/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { AgCharts } from "ag-charts-react";
import { customTheme } from "../utils/utils";

const ActivityChart: React.FC = () => {
  const [options] = useState<any>({
    theme: customTheme,
    data: [
      { activity: "Activity", percentage: 75 },
      { activity: "Daily Payment", percentage: 55 },
    ],
    series: [
      {
        type: "donut",
        angleKey: "percentage", 
        calloutLabelKey: "activity", 
        innerRadiusRatio: 0.6,
        sectorLabelKey: "percentage", 
        sectorLabel: {
          color: "#fff",
          fontSize: 14,
          formatter: (params: any) => `${params.value}%`,
        },
        fills: ["#46C2E8", "#8462F6"],
        strokeWidth: 0,
        startAngle: -90, 
        endAngle: 90,
      },
    ],
    legend: {
      enabled: true,
      position: "bottom",
      item: {
        marker: {
          shape: "circle",
          size: 10,
        },
        label: {
          color: "#fff",
          fontSize: 14,
        },
      },
    },
    tooltip: {
      enabled: true,
      renderer: (params: any) => {
        const value = params.datum.percentage;
        return `<div style="padding: 5px; background-color: #464687; border-radius: 3px;">
                  <b>${params.datum.activity}</b><br />
                  Percentage: ${value}%<br />
                </div>`;
      },
    },
  });

  return <AgCharts options={options} />;
};

export default ActivityChart;
