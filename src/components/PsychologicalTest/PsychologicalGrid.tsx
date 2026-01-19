"use client";

import * as React from "react";
import { Box, Typography, alpha, ButtonBase } from "@mui/material";

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

export type TestItem = { id: number; title: string; icon: React.ReactNode };
export type TestGridProps = { onSelect?: (t: TestItem) => void };

const TESTS: TestItem[] = [
  { id: 1, title: "EQ-н асуулга", icon: <PsychologyRoundedIcon /> },
  { id: 2, title: "Сэтгэл гутрал", icon: <MoodBadRoundedIcon /> },
  { id: 3, title: "Бүлгийн үүрэг", icon: <GroupsRoundedIcon /> },
  { id: 4, title: "Гэр бүлийн харилцаа", icon: <FamilyRestroomRoundedIcon /> },
  { id: 5, title: "Зан төлөвийн хурцдал", icon: <BoltRoundedIcon /> },
  { id: 6, title: "Зохион байгуулах соёлын түвшин", icon: <AccountTreeRoundedIcon /> },
  { id: 7, title: "Оюун ухааны чадамж", icon: <EmojiObjectsRoundedIcon /> },
  { id: 8, title: "Стрессийн түвшин тогтоох", icon: <SpeedRoundedIcon /> },
  { id: 9, title: "Сэтгэлийн хөдөлгөөн", icon: <EmojiEmotionsRoundedIcon /> },
  { id: 10, title: "Темперамент", icon: <ThermostatRoundedIcon /> },
  { id: 11, title: "Түгшүүрийн илрэл", icon: <ReportProblemRoundedIcon /> },
  { id: 12, title: "Ажлын байрны сэтгэл ханамжийн судалгаа", icon: <WorkRoundedIcon /> },
  { id: 13, title: "Зорилго", icon: <FlagRoundedIcon /> },
  { id: 14, title: "Хандлага (өгөх/авах)", icon: <SwapHorizRoundedIcon /> },
  { id: 15, title: "Удирдах хэв маяг", icon: <SupervisorAccountRoundedIcon /> },
];

const sx = {
  root: {
    mt: 2,
    display: "grid",
    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" },
    gap: 2,
  },
  btn: { textAlign: "left", width: "100%", borderRadius: 2.5, overflow: "hidden", p: 0 },
  card: {
    width: "100%",
    p: 2,
    borderRadius: 2.5,
    position: "relative",
    border: `1px solid ${alpha("#fff", 0.14)}`,
    backgroundColor: alpha("#0b1220", 0.42),
    backdropFilter: "blur(14px)",
    boxShadow: `0 18px 55px ${alpha("#000", 0.35)}`,
    transition: "0.18s ease",
    "&:hover": {
      transform: "translateY(-2px)",
      borderColor: alpha("#fff", 0.22),
      boxShadow: `0 24px 70px ${alpha("#000", 0.45)}`,
    },
    "&:active": { transform: "scale(0.99)" },
  },
  iconBox: {
    width: 66,
    height: 80,
    borderRadius: 2,
    display: "grid",
    placeItems: "center",
    color: "#fff",
    background: `linear-gradient(180deg, ${alpha("#fff", 0.16)}, ${alpha("#fff", 0.06)})`,
    border: `1px solid ${alpha("#fff", 0.14)}`,
    boxShadow: `0 10px 25px ${alpha("#000", 0.25)}`,
    flex: "0 0 auto",
    "& svg": { fontSize: 56 },
  },
  title: {
    fontWeight: 900,
    color: "#fff",
    lineHeight: 1.9,
    fontSize: 17.5,
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical" as const,
    overflow: "hidden",
  },
  sub: { mt: 0.7, fontSize: 16, color: alpha("#fff", 0.72) },
} as const;

export function TestGrid({ onSelect }: TestGridProps) {
  return (
    <Box>
      <Typography sx={{ color: alpha("#0f0707", 0.8), lineHeight: 1.7 }}>
        Доорх тестүүдээс сонгоод эхлүүлээрэй.
      </Typography>

      <Box sx={sx.root}>
        {TESTS.map((t) => (
          <PsycholocialGrid key={t.id} item={t} onClick={() => onSelect?.(t)} />
        ))}
      </Box>
    </Box>
  );
}

function PsycholocialGrid({ item, onClick }: { item: TestItem; onClick?: () => void }) {
  return (
    <ButtonBase onClick={onClick} sx={sx.btn}>
      <Box sx={sx.card}>
        <Box sx={{ display: "flex", gap: 1.25, alignItems: "flex-start" }}>
          <Box sx={sx.iconBox}>{item.icon}</Box>

          <Box sx={{ minWidth: 0, flex: 1 }}>
            <Typography sx={sx.title}>{item.title}</Typography>
            <Typography sx={sx.sub}>Тест эхлүүлэх →</Typography>
          </Box>
        </Box>
      </Box>
    </ButtonBase>
  );
}
