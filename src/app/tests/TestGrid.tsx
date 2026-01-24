"use client";

import * as React from "react";
import { Box, Typography, alpha, Button } from "@mui/material";

import DynamicTestModal from "../../components/Dynamic/DynamicModal";
import type { TestGridProps, TestItem } from "./types";
import { TESTS } from "./testData";
import KawaiiFace from "./faces/KawaiiFace";

const sx = {
  root: {
    mt: 1.5,
    display: "grid",
    gridTemplateColumns: {
      xs: "repeat(1, minmax(0, 1fr))",
      sm: "repeat(2, minmax(0, 1fr))",
      md: "repeat(3, minmax(0, 1fr))",
      lg: "repeat(5, minmax(0, 1fr))",
    },
    gap: 1.5,
  },

  card: (bg: string) => ({
    position: "relative",
    width: "100%",
    minHeight: 150,
    borderRadius: 3,
    p: 0.5,
    background: bg,
    boxShadow: `0 12px 28px ${alpha("#000", 0.10)}`,
    transition: "0.18s ease",
    overflow: "hidden",
    "&:hover": {
      transform: "translateY(-1px)",
      boxShadow: `0 18px 42px ${alpha("#000", 0.14)}`,
    },
    "&:active": { transform: "scale(0.99)" },
  }),

  dreamy: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    opacity: 0.6,
    background: `
      radial-gradient(120px 120px at 18% 18%, ${alpha("#fff", 0.60)} 50%, transparent 100%),
      radial-gradient(170px 170px at 85% 22%, ${alpha("#fff", 0.50)} 50%, transparent 100%),
      radial-gradient(220px 220px at 28% 100%, ${alpha("#fff", 0.80)} 50%, transparent 100%)
    `,
  },

  inner: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    alignItems: "center",
  },

  title: {
    mt: 0.5,
    fontWeight: "bold",
    color: alpha("#2E3233", 0.82),
    fontSize: "h6",
    lineHeight: 1.15,
    textAlign: "center" as const,
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical" as const,
    overflow: "hidden",
    minHeight: 34,
  },

  pill: (accent: string) => ({
    mt: "auto",
    pt: 0.9,
    width: "100%",
    "& .MuiButton-root": {
      width: "100%",
      borderRadius: 9,
      padding: "7px 10px",
      minHeight: 32,
      background: accent,
      border: `1px solid ${alpha("#fff", 0.78)}`,
      color: alpha("#1a1a1a", 0.82),
      fontWeight: "bold",
      textTransform: "none",
      boxShadow: `0 10px 18px ${alpha("#000", 0.09)}`,
      backdropFilter: "blur(10px)",
    },
  }),
} as const;

export function TestGrid({ onSelect }: TestGridProps) {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<TestItem | null>(null);

  const handleOpen = (t: TestItem) => {
    setSelected(t);
    setOpen(true);
    onSelect?.(t);
  };

  const handleClose = () => {
    setOpen(false);
    setSelected(null);
  };

  return (
    <Box>
      <Box sx={sx.root}>
        {TESTS.map((t) => (
          <EmotionCard key={t.id} item={t} onStart={() => handleOpen(t)} />
        ))}
      </Box>

      <DynamicTestModal
        open={open}
        test={selected}
        onClose={handleClose}
        onSubmit={(test, payload) => {
          console.log("SUBMIT:", test.key, payload);
          handleClose();
        }}
      />
    </Box>
  );
}

function EmotionCard({ item, onStart }: { item: TestItem; onStart?: () => void }) {
  return (
    <Box sx={sx.card(item.bg)}>
      <Box sx={sx.dreamy} />

      <Box sx={sx.inner}>
        <Box sx={{ mt: 2.3, mb: 1.2, display: "flex", justifyContent: "center" }}>
          <KawaiiFace type={item.face} />
        </Box>

        <Typography sx={sx.title}>{item.title}</Typography>

        <Box sx={sx.pill(item.accent)}>
          <Button onClick={onStart} fullWidth>
            Тест өгөх
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
