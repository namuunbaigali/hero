"use client";

import * as React from "react";
import { Box, Typography, alpha, ButtonBase, Button } from "@mui/material";

import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import MoodBadRoundedIcon from "@mui/icons-material/MoodBadRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import FamilyRestroomRoundedIcon from "@mui/icons-material/FamilyRestroomRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import AccountTreeRoundedIcon from "@mui/icons-material/AccountTreeRounded";
import EmojiObjectsRoundedIcon from "@mui/icons-material/EmojiObjectsRounded";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";
import EmojiEmotionsRoundedIcon from "@mui/icons-material/EmojiEmotionsRounded";
import ThermostatRoundedIcon from "@mui/icons-material/ThermostatRounded";
import ReportProblemRoundedIcon from "@mui/icons-material/ReportProblemRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import FlagRoundedIcon from "@mui/icons-material/FlagRounded";
import SwapHorizRoundedIcon from "@mui/icons-material/SwapHorizRounded";
import SupervisorAccountRoundedIcon from "@mui/icons-material/SupervisorAccountRounded";

export type EmotionType =
  | "joy"
  | "happy"
  | "excited"
  | "anxious"
  | "confused"
  | "sad"
  | "angry"
  | "calm"
  | "sleepy"
  | "love"
  | "surprised"
  | "stressed";

export type TestItem = {
  id: number;
  key: string;
  title: string;
  icon: React.ReactNode;
  bg: string;
  accent: string;
  face: EmotionType;
};

export type TestGridProps = { onSelect?: (t: TestItem) => void };

export const TESTS: TestItem[] = [
  {
    id: 1,
    key: "eq",
    title: "EQ-н асуулга",
    icon: <PsychologyRoundedIcon />,
    bg: "linear-gradient(180deg, #CFE7FF 0%, #BFD8FF 100%)",
    accent: "rgba(255,255,255,0.62)",
    face: "joy",
  },
  {
    id: 2,
    key: "depression",
    title: "Сэтгэл гутрал",
    icon: <MoodBadRoundedIcon />,
    bg: "linear-gradient(180deg, #BFE3EE 0%, #A8D2DF 100%)",
    accent: "rgba(255,255,255,0.62)",
    face: "sad",
  },
  {
    id: 3,
    key: "group-role",
    title: "Бүлгийн үүрэг",
    icon: <GroupsRoundedIcon />,
    bg: "linear-gradient(180deg, #FFD2D2 0%, #FFB9B9 100%)",
    accent: "rgba(255,255,255,0.62)",
    face: "happy",
  },
  {
    id: 4,
    key: "family",
    title: "Гэр бүлийн харилцаа",
    icon: <FamilyRestroomRoundedIcon />,
    bg: "linear-gradient(180deg, #DFF3CF 0%, #CDE9B7 100%)",
    accent: "rgba(255,255,255,0.62)",
    face: "love",
  },
  {
    id: 5,
    key: "personality",
    title: "Зан төлөвийн хурцдал",
    icon: <BoltRoundedIcon />,
    bg: "linear-gradient(180deg, #FFE7BF 0%, #FFD59A 100%)",
    accent: "rgba(255,255,255,0.62)",
    face: "stressed",
  },
  {
  id: 6,
  key: "organization-culture",
  title: "Зохион байгуулах соёлын түвшин",
  icon: <AccountTreeRoundedIcon />,
  bg: "linear-gradient(180deg, #E3F2FD 0%, #BBDEFB 100%)",
  accent: "rgba(255,255,255,0.62)",
  face: "surprised",
},
{
  id: 7,
  key: "intelligence",
  title: "Оюун ухааны чадамж",
  icon: <EmojiObjectsRoundedIcon />,
  bg: "linear-gradient(180deg, #FFF9C4 0%, #FFF59D 100%)",
  accent: "rgba(255,255,255,0.62)",
  face: "surprised",
},
{
  id: 8,
  key: "stress-level",
  title: "Стрессийн түвшин тогтоох",
  icon: <SpeedRoundedIcon />,
  bg: "linear-gradient(180deg, #FFE0E0 0%, #FFBABA 100%)",
  accent: "rgba(255,255,255,0.62)",
  face: "stressed",
},
{
  id: 9,
  key: "emotion",
  title: "Сэтгэлийн хөдөлгөөн",
  icon: <EmojiEmotionsRoundedIcon />,
  bg: "linear-gradient(180deg, #E1F5FE 0%, #B3E5FC 100%)",
  accent: "rgba(255,255,255,0.62)",
  face: "happy",
},
{
  id: 10,
  key: "temperament",
  title: "Темперамент",
  icon: <ThermostatRoundedIcon />,
  bg: "linear-gradient(180deg, #FFE7F0 0%, #FFCCE0 100%)",
  accent: "rgba(255,255,255,0.62)",
  face: "angry",
},
{
  id: 11,
  key: "anxiety",
  title: "Түгшүүрийн илрэл",
  icon: <ReportProblemRoundedIcon />,
  bg: "linear-gradient(180deg, #EDE7F6 0%, #D1C4E9 100%)",
  accent: "rgba(255,255,255,0.62)",
  face: "surprised",
},
{
  id: 12,
  key: "job-satisfaction",
  title: "Ажлын байрны сэтгэл ханамжийн судалгаа",
  icon: <WorkRoundedIcon />,
  bg: "linear-gradient(180deg, #E8F5E9 0%, #C8E6C9 100%)",
  accent: "rgba(255,255,255,0.62)",
  face: "happy",
},
{
  id: 13,
  key: "goal",
  title: "Зорилго",
  icon: <FlagRoundedIcon />,
  bg: "linear-gradient(180deg, #FFF3E0 0%, #FFE0B2 100%)",
  accent: "rgba(255,255,255,0.62)",
  face: "surprised",
},
{
  id: 14,
  key: "attitude",
  title: "Хандлага (өгөх/авах)",
  icon: <SwapHorizRoundedIcon />,
  bg: "linear-gradient(180deg, #E0F7FA 0%, #B2EBF2 100%)",
  accent: "rgba(255,255,255,0.62)",
  face: "surprised",
},
{
  id: 15,
  key: "leadership-style",
  title: "Удирдах хэв маяг",
  icon: <SupervisorAccountRoundedIcon />,
  bg: "linear-gradient(180deg, #F3E5F5 0%, #E1BEE7 100%)",
  accent: "rgba(255,255,255,0.62)",
  face: "surprised",
},

];

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

    // ✅ scroll гаргахгүй дэлгэцэнд барина
    maxHeight: { xs: "calc(100vh - 140px)", sm: "calc(100vh - 160px)" },
    overflow: "hidden",
  },

  card: (bg: string) => ({
    position: "relative",
    width: "100%",
    gap: 1.2,
    // ✅ өндөр багасгана (15 карт = 3 мөр)
    minHeight: 100,
    borderRadius: 3,
    p: 1.2,
    background: bg,
    boxShadow: `0 12px 28px ${alpha("#000", 0.10)}`,
    transition: "0.18s ease",
    "&:hover": {
      transform: "translateY(-1px)",
      boxShadow: `0 18px 42px ${alpha("#000", 0.14)}`,
    },
    "&:active": { transform: "scale(0.99)" },
  }),

  sticker: {
    width: 34,
    height: 34,
    borderRadius: 2.5,
    display: "grid",
    placeItems: "center",
    background: alpha("#fff", 0.62),
    border: `1px solid ${alpha("#fff", 0.72)}`,
    boxShadow: `0 8px 18px ${alpha("#000", 0.08)}`,
    "& svg": { fontSize: 20, color: alpha("#1d1d1d", 0.75) },
  },

  title: {
    mt: 0.8,
    fontWeight: 900,
    color: alpha("#1a1a1a", 0.82),
    fontSize: 14,
    lineHeight: 1.15,
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical" as const,
    overflow: "hidden",
  },

  sub: {
    mt: 0.25,
    fontSize: 11,
    fontWeight: 800,
    color: alpha("#1a1a1a", 0.5),
  },

  pill: (accent: string) => ({
    mt: "auto",
    pt: 0.9,
    "& .MuiButton-root": {
      width: "100%",
      borderRadius: 999,
      padding: "7px 10px",
      minHeight: 32,
      background: accent,
      border: `1px solid ${alpha("#fff", 0.78)}`,
      color: alpha("#1a1a1a", 0.82),
      fontWeight: 900,
      textTransform: "none",
      fontSize: 12,
      boxShadow: `0 10px 18px ${alpha("#000", 0.09)}`,
      backdropFilter: "blur(10px)",
    },
  }),

  btn: {
    textAlign: "left",
    width: "100%",
    borderRadius: 3,
    overflow: "hidden",
    p: 0,
    outline: "none",
    display: "block",
  },
} as const;


export function TestGrid({ onSelect }: TestGridProps) {
  return (
    <Box>
      <Typography sx={{ color: alpha("#0f0707", 0.8), lineHeight: 1.7 }}>
        Доорх тестүүдээс сонгоод эхлүүлээрэй.
      </Typography>

      <Box sx={sx.root}>
        {TESTS.map((t) => (
          <EmotionCard key={t.id} item={t} onStart={() => onSelect?.(t)} />
        ))}
      </Box>
    </Box>
  );
}


function EmotionCard({
  item,
  onStart,
}: {
  item: TestItem;
  onStart?: () => void;
}) {
  return (
    <Box sx={sx.btn}>
      <Box sx={sx.card(item.bg)}>
        {/* dreamy blobs */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            opacity: 0.6,
            background: `
              radial-gradient(120px 120px at 18% 18%, ${alpha("#fff", 0.6)} 0%, transparent 60%),
              radial-gradient(170px 170px at 85% 22%, ${alpha("#fff", 0.38)} 0%, transparent 62%),
              radial-gradient(220px 220px at 28% 100%, ${alpha("#fff", 0.26)} 0%, transparent 60%)
            `,
          }}
        />

        <Box sx={{ position: "relative", display: "flex", flexDirection: "column", height: "100%" }}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Box sx={sx.sticker}>{item.icon}</Box>

            <Box
              sx={{
                fontSize: 12,
                fontWeight: 900,
                color: alpha("#1a1a1a", 0.55),
                background: alpha("#fff", 0.4),
                border: `1px solid ${alpha("#fff", 0.55)}`,
                px: 1.2,
                py: 0.65,
                borderRadius: 999,
              }}
            >
              Mood Card
            </Box>
          </Box>

          <Box sx={{ mt: 2.3, mb: 1.2, display: "flex", justifyContent: "center" }}>
            <KawaiiFace type={item.face} />
          </Box>

          <Typography sx={sx.title}>{item.title}</Typography>
          <Typography sx={sx.sub}>Товшоод эхлүүлнэ ✨</Typography>

          {/* ✅ ЗӨВХӨН ЭНЭ ТОВЧ ДАРАХАД Л АЖИЛЛАНА */}
          <Box sx={sx.pill(item.accent)}>
            <Button
              onClick={onStart}
              fullWidth
            >
              Тест өгөх
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}


/** ✅ Илүү kawaii нүүр (олон төрөлтэй) */
function KawaiiFace({ type }: { type: EmotionType }) {
  const base = {
    width: 108,
    height: 84,
    borderRadius: 999,
    position: "relative" as const,
    background: alpha("#fff", 0.35),
    border: `1px solid ${alpha("#fff", 0.6)}`,
    boxShadow: `0 16px 30px ${alpha("#000", 0.09)}`,
    backdropFilter: "blur(10px)",
  };

  const cheek = (side: "l" | "r") => ({
    width: 14,
    height: 14,
    borderRadius: 999,
    background: alpha("#FF6FA3", 0.42),
    position: "absolute" as const,
    top: 46,
    left: side === "l" ? 18 : "auto",
    right: side === "r" ? 18 : "auto",
  });

  const eyeDot = (side: "l" | "r") => ({
    width: 10,
    height: 10,
    borderRadius: 999,
    background: alpha("#1a1a1a", 0.65),
    position: "absolute" as const,
    top: 28,
    left: side === "l" ? 30 : "auto",
    right: side === "r" ? 30 : "auto",
  });

  const eyeClosed = (side: "l" | "r") => ({
    width: 18,
    height: 10,
    borderBottom: `4px solid ${alpha("#1a1a1a", 0.6)}`,
    borderRadius: "0 0 18px 18px",
    position: "absolute" as const,
    top: 28,
    left: side === "l" ? 24 : "auto",
    right: side === "r" ? 24 : "auto",
  });

  const eyeStar = (side: "l" | "r") => ({
    position: "absolute" as const,
    top: 22,
    left: side === "l" ? 24 : "auto",
    right: side === "r" ? 24 : "auto",
    fontSize: 18,
    lineHeight: 1,
    color: alpha("#1a1a1a", 0.65),
  });

  const eyeHeart = (side: "l" | "r") => ({
    position: "absolute" as const,
    top: 22,
    left: side === "l" ? 24 : "auto",
    right: side === "r" ? 24 : "auto",
    fontSize: 18,
    lineHeight: 1,
    color: alpha("#FF4D86", 0.85),
    filter: "drop-shadow(0 6px 10px rgba(0,0,0,0.10))",
  });

  const browAngry = (side: "l" | "r") => ({
    position: "absolute" as const,
    top: 18,
    left: side === "l" ? 26 : "auto",
    right: side === "r" ? 26 : "auto",
    width: 18,
    height: 0,
    borderTop: `4px solid ${alpha("#1a1a1a", 0.55)}`,
    transform: side === "l" ? "rotate(18deg)" : "rotate(-18deg)",
    borderRadius: 6,
  });

  const tear = (side: "l" | "r") => ({
    position: "absolute" as const,
    top: 38,
    left: side === "l" ? 36 : "auto",
    right: side === "r" ? 36 : "auto",
    width: 8,
    height: 12,
    borderRadius: "0 0 10px 10px",
    background: alpha("#5AAEFF", 0.65),
  });

  const mouth = (style: "smile" | "o" | "wave" | "flat" | "tiny") => {
    const common = {
      position: "absolute" as const,
      left: "50%",
      transform: "translateX(-50%)",
      top: 44,
    };
    if (style === "smile")
      return { ...common, width: 26, height: 14, borderBottom: `4px solid ${alpha("#1a1a1a", 0.6)}`, borderRadius: "0 0 18px 18px" };
    if (style === "o")
      return { ...common, width: 12, height: 12, borderRadius: 999, background: alpha("#1a1a1a", 0.55) };
    if (style === "wave")
      return { ...common, width: 22, height: 10, borderTop: `4px solid ${alpha("#1a1a1a", 0.55)}`, borderRadius: "16px 16px 0 0" };
    if (style === "flat")
      return { ...common, width: 18, height: 0, borderTop: `4px solid ${alpha("#1a1a1a", 0.55)}`, borderRadius: 6 };
    return { ...common, width: 10, height: 10, borderRadius: 999, background: alpha("#1a1a1a", 0.5) };
  };

  // face config by type
  const renderEyes = () => {
    switch (type) {
      case "love":
        return (
          <>
            <Box sx={eyeHeart("l")}>♥</Box>
            <Box sx={eyeHeart("r")}>♥</Box>
          </>
        );
      case "excited":
        return (
          <>
            <Box sx={eyeStar("l")}>✦</Box>
            <Box sx={eyeStar("r")}>✦</Box>
          </>
        );
      case "calm":
      case "sleepy":
        return (
          <>
            <Box sx={eyeClosed("l")} />
            <Box sx={eyeClosed("r")} />
          </>
        );
      case "angry":
        return (
          <>
            <Box sx={browAngry("l")} />
            <Box sx={browAngry("r")} />
            <Box sx={eyeDot("l")} />
            <Box sx={eyeDot("r")} />
          </>
        );
      default:
        return (
          <>
            <Box sx={eyeDot("l")} />
            <Box sx={eyeDot("r")} />
          </>
        );
    }
  };

  const mouthStyle: any = (() => {
    if (type === "sad") return mouth("wave");
    if (type === "confused") return { ...mouth("flat"), transform: "translateX(-50%) rotate(-6deg)" };
    if (type === "anxious" || type === "stressed") return mouth("flat"); // keep flat, plus sweat below
    if (type === "surprised") return mouth("o");
    if (type === "sleepy") return mouth("tiny");
    if (type === "angry") return mouth("flat");
    return mouth("smile");
  })();

  return (
    <Box sx={base}>
      {/* cheeks */}
      <Box sx={cheek("l")} />
      <Box sx={cheek("r")} />

      {/* eyes */}
      {renderEyes()}

      {/* extras */}
      {type === "sad" && (
        <>
          <Box sx={tear("l")} />
          <Box sx={tear("r")} />
        </>
      )}

      {(type === "anxious" || type === "stressed") && (
        <Box
          sx={{
            position: "absolute",
            top: 18,
            right: 18,
            width: 10,
            height: 14,
            borderRadius: "0 0 10px 10px",
            background: alpha("#5AAEFF", 0.55),
            transform: "rotate(18deg)",
          }}
        />
      )}

      {/* mouth */}
      <Box sx={mouthStyle} />

      {/* small blush spark */}
      <Box
        sx={{
          position: "absolute",
          left: 10,
          top: 12,
          fontSize: 14,
          opacity: 0.6,
        }}
      >
        ✧
      </Box>
    </Box>
  );
}
