import { Paper, Box, Typography, alpha } from "@mui/material";
import Image from "next/image";
import dbImage from "../../DBimage.png";

export default function InfoCard() {
  return (
    <Paper
      sx={{
        position: "relative",
        height: 120, // зурагтай balance сайн
        borderRadius: 6,
        px: 4,
        py: 2,
        mb: 2,

        overflow: "visible", // ✅ илүү гаргана

        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        background: `
          linear-gradient(
            135deg,
            #F8FAFF 0%,
            #EEF2FF 20%,
            #F5F7FF 50%
          )
        `,
        boxShadow: "50px 550px 30px rgba(0,0,0,.05)",
      }}
    >
      {/* 🔵 decorative blur */}
      <Box
        sx={{
          position: "absolute",
          right: -60,
          top: -70,
          width: 220,
          height: 220,
          borderRadius: "50%",
          background: alpha("#6366F1", 0.15),
          filter: "blur(70px)",
          zIndex: 0,
        }}
      />

      {/* LEFT TEXT */}
      <Box sx={{ zIndex: 2 }}>
        <Typography
          sx={{
            fontSize: 22,
            fontWeight: 800,
            color: "#1E293B",
            lineHeight: 1.25,
          }}
        >
          Сайн уу?{" "}
          <Box component="span" sx={{ color: "#6366F1" }}>
            С. Бадарч
          </Box>
        </Typography>

        <Typography
          sx={{
            mt: 0.6,
            fontSize: 14,
            color: "#64748B",
          }}
        >
          Өдрийг сайхан өнгөрүүлээрэй!
        </Typography>
      </Box>

      {/* ✅ FLOATING IMAGE (wrapper + fill) */}
      <Box
        sx={{
          position: "absolute",
          right: 14,     // 👉 баруун тийш ойртуулна
          // left: "auto", // 👉 left auto болгоно
          bottom: -16,  // 👉 доош илүү гаргана
          width: 320,
          height: 180,
          zIndex: 3,
          pointerEvents: "none",
        }}
      >
        <Image
          src={dbImage}
          alt="doctor"
          fill
          priority
          style={{ objectFit: "contain" }}
        />
      </Box>
    </Paper>
  );
}
