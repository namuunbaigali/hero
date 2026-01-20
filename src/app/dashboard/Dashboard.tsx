"use client";

import { Box, Grid, Typography } from "@mui/material";

import HeaderCard from "./components/HeaderCard";
import StatCard from "./components/AnhaarahAsuudal";
import WaterChart from "./components/chart/MyPalns";
import BarChart from "./components/chart/BarChart";
export default function Dashboard() {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Grid container spacing={2}>
        {/* 1️⃣ INFO */}
        <Grid size={{ xs: 12, md: 6, lg: 6 }}>
          <HeaderCard />
      
          <BarChart />
        </Grid>

        {/* 2️⃣ STAT */}
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <StatCard
            title="Сэтгэл гутрал"
            total={55}
            items={[
              { label: "Бага", value: 45, color: "#6366F1" },
              { label: "Дунд", value: 35, color: "#22C55E" },
              { label: "Их", value: 20, color: "#F97316" },
            ]}
          />
        </Grid>

        {/* 3️⃣ GRAPH */}
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <WaterChart />
        </Grid>

        {/* 4️⃣ SIDE */}
        {/* <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <SideAssistant />
        </Grid> */}
      </Grid>
    </Box>
  );
}
