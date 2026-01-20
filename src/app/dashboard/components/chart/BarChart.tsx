import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { dataset, valueFormatter } from "./chartTest";

// MUI X Charts-ийн нийтлэг props-д тааруулж typed
const chartSetting = {
  yAxis: [
    {
      label: "rainfall (mm)",
      width: 60,
    },
  ],
  height: 300,
} as const;

export default function BarsDataset(): JSX.Element {
  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ dataKey: "month" }]}
      series={[
        { dataKey: "london", label: "London", valueFormatter },
        { dataKey: "paris", label: "Paris", valueFormatter },
        { dataKey: "newYork", label: "New York", valueFormatter },
        { dataKey: "seoul", label: "Seoul", valueFormatter },
      ]}
      {...chartSetting}
    />
  );
}
