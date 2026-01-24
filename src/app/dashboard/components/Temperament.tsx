"use client";

import { Paper, Typography, alpha, useTheme } from "@mui/material";
import HalfTemperamentPie from "./chart/HalfTemperamentPie";

export default function WaterChart() {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        p: 2.5,
        borderRadius: 4,
        height: 240, // ✅ 200 дээр багтахгүй байсан
         background: `linear-gradient(180deg,
                ${alpha("#C4D9FF", 0.95)} 0%,
                ${alpha("#E8F9FF", 0.9)} 45%,
                ${alpha("#FFFFFF", 0.95)} 100%)`,
              border: `1px solid ${alpha("#2C394B", 0.12)}`,
              boxShadow: `0 18px 50px ${alpha("#2C394B", 0.12)}`,
        backdropFilter: "blur(14px)",
        overflow: "hidden", // ✅ тасрах эрсдэл багасна
      }}
    >
      <Typography fontWeight={'bold'} mb={1.5}>
        Алба хаагчдын темперамент
      </Typography>

     <HalfTemperamentPie
  height={100}
  colors={{
    sanguine: "#FFD93D",
    choleric: "#FF4C4C",
    phlegmatic: "#4D96FF",
    melancholic: "#845EC2",
  }}
  data={[
    { id: "sanguine", label: "Сангвиник", value: 120 },
    { id: "choleric", label: "Холерик", value: 80 },
    { id: "phlegmatic", label: "Флегматик", value: 60 },
    { id: "melancholic", label: "Меланхолик", value: 40 },
  ]}
/>

    </Paper>
  );
}
