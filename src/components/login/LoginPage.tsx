"use client";

import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  Divider,
} from "@mui/material";
import Image from "next/image";
import loginImage from "../../app/loginImage.png";

const brand = {
  primary: "#1B5E20", // deep green
  primary2: "#2E7D32", // green
  ink: "#0F172A",
  muted: "rgba(15, 23, 42, 0.62)",
  bg: "#EEF2EE", // very light green/gray (clean)
};

const inputSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: 2.5,
    backgroundColor: "#fff",
    backdropFilter: "blur(6px)",
    transition: "all .2s ease",
    "& fieldset": { borderColor: "rgba(18,18,18,0.12)" },
    "&:hover fieldset": { borderColor: "rgba(46, 125, 50, 0.55)" },
    "&.Mui-focused fieldset": {
      borderColor: "rgba(46, 125, 50, 0.95)",
      borderWidth: 2,
    },
  },
  "& .MuiInputLabel-root": { color: "rgba(23,26,31,0.55)" },
};

export default function LoginPage({
  onSuccess,
}: {
  onSuccess: () => void;
}) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        bgcolor: brand.bg,
        p: { xs: 2, md: 4 },
        position: "relative",
        overflow: "hidden",
        "&:before": {
          content: '""',
          position: "absolute",
          inset: -200,
        },
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "min(1120px, 100%)",
          borderRadius: 7,
          overflow: "hidden",
          position: "relative",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.6)",
          boxShadow:
            "0 25px 60px rgba(16,16,24,0.18), 0 10px 20px rgba(16,16,24,0.10)",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            minHeight: { xs: "auto", md: 640 },
          }}
        >
          {/* LEFT (visual) */}
          <Box
            sx={{
              position: "relative",
              color: "#fff",
              p: { xs: 3, sm: 5 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 3,
              background: `linear-gradient(135deg, #0B3D2E 0%, #1B5E20 45%, #2E7D32 100%)`,

              overflow: "hidden",
              borderRadius: { xs: 0, md: "0 80px 80px 0px" },
            }}
          >
            {/* soft blobs */}
            <Box
              sx={{
                position: "absolute",
                width: 420,
                height: 420,
                borderRadius: "50%",
                right: -180,
                top: -120,
                background:
                  "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.45), rgba(255,255,255,0.0) 60%)",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                width: 520,
                height: 520,
                borderRadius: "50%",
                left: -180,
                bottom: -120,
                background:
                  "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.45), rgba(255,255,255,0.0) 60%)",
              }}
            />


            {/* wave separator (md+) */}

            <Box sx={{ position: "relative" }}>
              <Typography sx={{ fontWeight: "bold", letterSpacing: 1 }}>
                Хил хамгаалах ерөнхий газар
              </Typography>

              <Typography
                sx={{
                  mt: 2,
                  fontSize: { xs: 34, sm: 46 },
                  lineHeight: 1.04,
                  fontWeight: 900,
                  textShadow: "0 10px 30px rgba(0,0,0,0.18)",
                }}
              >
                HERO
              </Typography>

              <Typography sx={{ mt: 0, opacity: 0.88, maxWidth: 430 }}>
                Сэтгэл зүйн тестийн программ
              </Typography>
            </Box>

            {/* Illustration (optional) */}
            <Box
              sx={{
                position: "relative",
                display: "grid",
                placeItems: "center",
              }}
            >
              <Image
                src={loginImage}
                alt="illustration"
                style={{ width: "100%", height: "auto", display: "block" }}
                priority
              />
            </Box>

            <Typography
              sx={{ opacity: 0.85, fontSize: 12, position: "relative" }}
            >
              Хилийн цэргийн 0151 дугаар анги
            </Typography>
          </Box>

          {/* RIGHT (login form) */}
          <Box
            sx={{
              bgcolor: "rgba(245, 248, 245, 0.85)",

              p: { xs: 3, sm: 5 },
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: 480,
                mx: "auto",
                p: { xs: 2.5, sm: 3 },
                borderRadius: 5,
                background: "rgba(255,255,255,0.78)",
                border: "1px solid rgba(20,20,30,0.06)",
                boxShadow: "0 18px 40px rgba(16,16,24,0.10)",
              }}
            >
              <Typography
                sx={{ fontSize: 26, fontWeight: 900, color: brand.ink }}
              >
                Hero.
              </Typography>
              <Typography sx={{ mt: 0.6, color: brand.muted }}>
                Сэтгэл зүйн тестийн программд тавтай морилно уу.
              </Typography>

              <Box
                component="form"
                onSubmit={(e) => {
                  e.preventDefault();
                  // TODO: энд login API дуудна
                  // амжилттай бол:
                  onSuccess();
                }}
                sx={{ mt: 3 }}
              >
                <Stack spacing={2.1}>
                  <TextField
                    label="Email"
                    type="email"
                    fullWidth
                    sx={inputSx}
                  />
                  <TextField
                    label="Password"
                    type="password"
                    fullWidth
                    sx={inputSx}
                  />

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 2,
                    }}
                  ></Box>

                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      height: 46,
                      borderRadius: 3,
                      textTransform: "none",
                      fontWeight: 900,
                      background:
                        "linear-gradient(135deg, #1B5E20 0%, #2E7D32 100%)",
                      boxShadow: "0 14px 28px rgba(27, 94, 32, 0.28)",
                      "&:hover": {
                        transform: "translateY(-1px)",
                        boxShadow: "0 18px 34px rgba(27, 94, 32, 0.34)",
                        background:
                          "linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%)",
                      },
                    }}
                  >
                    Log In
                  </Button>

                  <Divider sx={{ my: 0.5 }} />
                </Stack>
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
