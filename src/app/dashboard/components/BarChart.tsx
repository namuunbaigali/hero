"use client";

import { Box, Paper, Typography, alpha, useTheme } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import type { JSX } from "react";
import { dataset, valueFormatter } from "./chart/BarChartDataTest";

/** Null-safe formatter */
const safeValueFormatter = (value: number | null): string => valueFormatter(value ?? 0);

export default function BarsDataset(): JSX.Element {
  const theme = useTheme();

  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 2, sm: 2.5 },
        borderRadius: 4,
        background: `linear-gradient(180deg,
          ${alpha(theme.palette.primary.main, 0.10)} 0%,
          ${alpha(theme.palette.background.paper, 0.55)} 55%,
          ${alpha(theme.palette.background.paper, 0.30)} 100%)`,
           border: `1px solid ${alpha("#2C394B", 0.12)}`,
              boxShadow: `0 18px 50px ${alpha("#2C394B", 0.12)}`,
        backdropFilter: "blur(14px)",
        overflow: "hidden",
      }}
    >
        {/* soft blobs */}
                 <Box
                   sx={{
                     position: "absolute",
                     right: -60,
                     top: -70,
                     width: 240,
                     height: 240,
                     borderRadius: "50%",
                     background: `radial-gradient(circle at 30% 30%,
                       ${alpha(theme.palette.primary.main, 0.35)} 0%,
                       ${alpha(theme.palette.primary.main, 0)} 60%)`,
                     pointerEvents: "none",
                   }}
                 />
                 <Box
                   sx={{
                     position: "absolute",
                     left: -70,
                     bottom: -90,
                     width: 280,
                     height: 280,
                     borderRadius: "50%",
                     background: `radial-gradient(circle at 60% 40%,
                       ${alpha("#7C7BF2", 0.22)} 0%,
                       ${alpha("#7C7BF2", 0)} 60%)`,
                     pointerEvents: "none",
                   }}
                 />
      {/* Header */}
      <Box sx={{ mb: 1.5, display: "flex", alignItems: "baseline", gap: 1.2 }}>
        <Typography sx={{ fontWeight: "bold", fontSize: 16 }}>
          Тестүүдийн хүйсийн харьцуулалт
        </Typography>
        <Typography sx={{ fontSize: 12, color: alpha(theme.palette.text.primary, 0.6) }}>
          (Эрэгэй vs Эмэгтэй)
        </Typography>
      </Box>

      <BarChart
        dataset={dataset}
        height={460}
        margin={{ top: 18, right: 18, bottom: 40, left: 18 }}
        xAxis={[
          {
            dataKey: "label",
            scaleType: "band",
            tickLabelStyle: {
              fontSize: 11,
              angle: -25,
              textAnchor: "end",
            },
          },
        ]}
        yAxis={[
          {
            label: "Оноо",
            tickLabelStyle: { fontSize: 11 },
          },
        ]}
        series={[
          {
            dataKey: "Эрэгэй",
            label: "Эрэгэй",
            valueFormatter: safeValueFormatter,
            highlightScope: { highlight: "item", fade: "global" },              
          },
          {
            dataKey: "Эмэгтэй",
            label: "Эмэгтэй",
            valueFormatter: safeValueFormatter,
            highlightScope: { highlight: "item", fade: "global" },
          },
        ]}
        grid={{ horizontal: true }}
        // tooltip={{ trigger: "item" }}
        // legend={{
        //   direction: "row",
        //   position: { vertical: "top", horizontal: "right" },
        //   itemGap: 16,
        //   labelStyle: { fontSize: 12 },
        // }}
colors={[
  "#8FA7FF", // pastel indigo
  "#FFB6C1", // pastel rose
]}

        sx={{
          "& .MuiChartsAxis-root .MuiChartsAxis-tickLabel": {
            fill: alpha(theme.palette.text.primary, 0.32),
          },
          "& .MuiChartsAxis-root .MuiChartsAxis-line, & .MuiChartsAxis-root .MuiChartsAxis-tick": {
            stroke: alpha(theme.palette.text.primary, 0.22),
          },
          "& .MuiChartsGrid-line": {
            stroke: alpha(theme.palette.text.primary, 0.10),
            strokeDasharray: "4 6",
          },
          // Bar style
          "& .MuiBarElement-root": {
            rx: 10,
            ry: 10,
            filter: `drop-shadow(0px 10px 14px ${alpha(theme.palette.common.black, 0.25)})`,
          },
        }}
      />
    </Paper>
  );
}
