"use client";

import * as React from "react";
import { Box, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";

type PieItem = {
  id: string;         // ✅ dynamic
  label: string;
  value: number;
  color?: string;     // ✅ optional
};

type Props = {
  title?: string;
  total?: number;
  data: PieItem[];
  height?: number;
  colors?: Record<string, string>; // ✅ хүсвэл гаднаас өнгө map өгнө
};

export default function HalfTemperamentPie({
  total,
  data,
  height = 200,
  colors = {},
}: Props) {
  const sum = data.reduce((a, b) => a + (b.value ?? 0), 0);
  const centerText = total ?? sum;

  // ✅ legend хэсэгт зай үлдээе
  const chartH = Math.max(100, height - 46);

  // ✅ өнгө автоматаар fallback хийе (өнгө ирээгүй бол)
  const fallback = ["#FFD93D", "#FF4C4C", "#4D96FF", "#845EC2", "#2EC4B6", "#FF9F1C"];

  const seriesData = data.map((d, i) => ({
    id: d.id,
    value: d.value,
    label: d.label,
    color: d.color ?? colors[d.id] ?? fallback[i % fallback.length],
  }));

  return (
    <Box>
      <Box sx={{ position: "relative", height: chartH }}>
        <PieChart
          height={chartH}
          series={[
            {
              data: seriesData,
              innerRadius: 20,
              outerRadius: 90,
              startAngle: -180,
              endAngle: 0,
              paddingAngle: 1,
              cornerRadius: 6,
              cx: 95,
              cy: chartH - 10,
            },
          ]}
          // ✅ зөв хэлбэрээр legend нуух
          // legend={{ hidden: true }}
          // Хэрвээ танай хувилбар legend.hidden дэмжихгүй бол доорхийг ашигла:
          slotProps={{ legend: { sx: { display: "none" } } }}
        />

        {/* Center label */}
        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 8,
            display: "flex",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Typography sx={{ fontSize: 24, fontWeight: 900, lineHeight: 1 }}>
              {centerText}
            </Typography>
            <Typography sx={{ opacity: 0.7, fontSize: 11 }}>нийт хэрэглэгч</Typography>
          </Box>
        </Box>
      </Box>

      {/* Mini legend */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 0.5,
          mt: 2,
        }}
      >
        {seriesData.map((d) => {
          const pct = sum ? Math.round((d.value / sum) * 100) : 0;
          return (
            <Box
              key={d.id}
              sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1 }}
            >
              <Box sx={{ width: 12, height: 12, borderRadius: 2, bgcolor: d.color }} />
              <Typography sx={{ fontSize: 12, opacity: 0.85 }}>
                {d.label}: <b>{pct}%</b>
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
