"use client";

import { Paper, Typography, alpha, Box } from "@mui/material";

export default function FooterCard() {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 6,
        height: 145,
        position: "relative",
        overflow: "hidden",

        background: `linear-gradient(180deg,
                 ${alpha("#C4D9FF", 0.95)} 0%,
                 ${alpha("#E8F9FF", 0.9)} 45%,
                 ${alpha("#FFFFFF", 0.95)} 100%)`,

        border: `1px solid ${alpha("#000", 0.08)}`,
        backdropFilter: "blur(16px)",

        boxShadow: `
          0 20px 50px ${alpha("#fff", 0.18)},
          inset 0 1px 0 ${alpha("#FFFFFF", 0.8)}
        `,
      }}
    >
      {/* 🌸 floating blur bubbles */}
      <Box
        sx={{
          position: "absolute",
          width: 160,
          height: 160,
          borderRadius: "50%",
          top: -60,
          right: -60,
          background: "radial-gradient(circle, #FFB7D5 0%, transparent 70%)",
          filter: "blur(35px)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: 120,
          height: 120,
          borderRadius: "50%",
          bottom: -50,
          left: -40,
          background: "radial-gradient(circle, #B7C8FF 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* 💬 Quote icon */}
      <Typography
        sx={{
          fontSize: 44,
          lineHeight: 1,
          opacity: 0.15,
          position: "absolute",
          top: 16,
          left: 20,
          fontWeight: 900,
          userSelect: "none",
        }}
      >
        “
      </Typography>

      {/* ✨ content */}
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Typography
          fontWeight={700}
          mb={1.2}
          sx={{
            fontSize: 15,
            color: "#3A3A3A",
          }}
        >
          💡 Санамж
        </Typography>

        <Typography
          fontSize={14}
          sx={{
            color: alpha("#000", 0.65),
            lineHeight: 1.55,
          }}
        >
          “Сэтгэл гутралын шалтгаан бол та сул дорой, эсвэл сэтгэл мэдрэлийн
          өвчтэй гэсэн үг огт биш. Харин өөрт хэрэгтэй байгаа зүйлтэйгээ
          учраагүй байгаа энгийн л хүн юм.”
        </Typography>

        <Typography mt={1} fontSize={12} sx={{ opacity: 0.5 }}>
          — Сэтгэл зүйн зөвлөгөө
        </Typography>
      </Box>
    </Paper>
  );
}
