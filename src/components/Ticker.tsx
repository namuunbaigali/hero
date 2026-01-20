"use client";

import { Box, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
export default function RunningText() {
  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        whiteSpace: "nowrap",
 backgroundColor: alpha("#C4D7FF", 0.25),
        boxShadow: "3",
        boxShadowColor: alpha("#C4D7FF", 0.25),
        backdropFilter: "blur(14px)",
        py: 1,
      }}
    >
      <Typography
        sx={{
          display: "inline-block",
          color: "gray",
          fontWeight: 700,
          fontSize: 16,
          animation: "marquee 30s linear infinite",

          "@keyframes marquee": {
            from: { transform: "translateX(100%)" },
            to: { transform: "translateX(-100%)" },
          },
        }}
      >
        🔔 ШИНЭ МЭДЭЭ: Сэтгэл зүйн тест үнэгүй нээгдлээ •
        Өнөөдөр бүртгүүлбэл 30% хямдрал •
        📢 Шинэ тестүүд нэмэгдлээ
      </Typography>
    </Box>
  );
}
