"use client";

import { Paper, Typography,Box, alpha, useTheme } from "@mui/material";
import HalfTemperamentPie from "./chart/HalfTemperamentPie";

export default function GutralCard() {
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
      
      <Typography fontWeight={"bold"} mb={1.5}>
        Алба хаагчдын сэтгэл гутралын түвшин
      </Typography>
      <HalfTemperamentPie
        height={110}
        total={300}
        colors={{
          normal: "#4CAF50",
          mild: "#FFB300",
          moderate: "#FF7043",
          severe: "#E53935",
        }}
        data={[
          { id: "normal", label: "Хэвийн", value: 160 },
          { id: "mild", label: "Хөнгөн", value: 78 },
          { id: "moderate", label: "Дунд", value: 42 },
          { id: "severe", label: "Хүнд", value: 20 },
        ]}
      />
    </Paper>
  );
}
