"use client";

import { Box, Typography, IconButton, alpha } from "@mui/material";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { toast } from "react-toastify";

type Props = {
  toastId?: string | number;
  title?: string;
  message: string;
};

export default function AdToast({
  toastId,
  title = "Зар мэдээ",
  message,
}: Props) {
  return (
    <Box
      sx={{
        minWidth: 320,
        maxWidth: 380,
        p: 2,
        borderRadius: 2,
        display: "flex",
        gap: 1.5,
        alignItems: "flex-start",
        position: "relative",

        backdropFilter: "blur(16px)",
        background: `linear-gradient(135deg,
          ${alpha("#6C63FF", 0.18)},
          rgba(255,255,255,0.9)
        )`,
        border: `1px solid ${alpha("#6C63FF", 0.28)}`,
        boxShadow: "0 18px 45px rgba(0,0,0,.18)",
      }}
    >
      {/* 🔔 icon */}
      <Box
        sx={{
          width: 50,
          height: 50,
          borderRadius: "50%",
          display: "grid",
          placeItems: "center",
          color: "#6C63FF",
          background: "#fff",
          flexShrink: 0,
        }}
      >
        <CampaignRoundedIcon fontSize="medium" />
      </Box>

      {/* text */}
      <Box flex={1} sx={{color:"rgba(32,35,64,0.75)" }}>
        <Typography sx={{ fontWeight: 900, fontSize: 14.5 , }}>
          {title}
        </Typography>
        <Typography sx={{ mt: 0.4, opacity: 2, fontSize: 14.5 }}>
          {message}
        </Typography>
      </Box>

      {/* ❌ close button */}
      <IconButton
        size="small"
        onClick={() => {
          if (toastId !== undefined) toast.dismiss(toastId);
        }}
        sx={{
          position: "absolute",
          top: 6,
          right: 6,
          color: alpha("#000", 0.55),
        }}
      >
        <CloseRoundedIcon fontSize="small" />
      </IconButton>
    </Box>
  );
}
