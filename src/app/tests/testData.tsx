
import type { TestItem } from "./types";

import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import MoodBadRoundedIcon from "@mui/icons-material/MoodBadRounded";
import GroupsRoundedIcodedIcon from "@mui/icons-material/AccountTreeRounded";
import EmojiObjectsRoundedn from "@mui/icons-material/GroupsRounded";
import FamilyRestroomRoundedIcon from "@mui/icons-material/FamilyRestroomRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import AccountTreeRounIcon from "@mui/icons-material/EmojiObjectsRounded";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";
import EmojiEmotionsRoundedIcon from "@mui/icons-material/EmojiEmotionsRounded";
import ThermostatRoundedIcon from "@mui/icons-material/ThermostatRounded";
import ReportProblemRoundedIcon from "@mui/icons-material/ReportProblemRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import FlagRoundedIcon from "@mui/icons-material/FlagRounded";
import SwapHorizRoundedIcon from "@mui/icons-material/SwapHorizRounded";
import SupervisorAccountRoundedIcon from "@mui/icons-material/SupervisorAccountRounded";

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
    face: "happy",
  },
  {
    id: 3,
    key: "group-role",
    title: "Бүлгийн үүрэг",
    icon: <GroupsRoundedIcodedIcon />,
    bg: "linear-gradient(180deg, #FFD2D2 0%, #FFB9B9 100%)",
    accent: "rgba(255,255,255,0.62)",
    face: "excited",
  },
  {
    id: 4,
    key: "family",
    title: "Гэр бүлийн харилцаа",
    icon: <FamilyRestroomRoundedIcon />,
    bg: "linear-gradient(180deg, #DFF3CF 0%, #CDE9B7 100%)",
    accent: "rgba(255,255,255,0.62)",
    face: "anxious",
  },
  {
    id: 5,
    key: "personality",
    title: "Зан төлөвийн хурцдал",
    icon: <BoltRoundedIcon />,
    bg: "linear-gradient(180deg, #FFE7BF 0%, #FFD59A 100%)",
    accent: "rgba(255,255,255,0.62)",
    face: "confused",
  },
  {
    id: 6,
    key: "organization-culture",
    title: "Зохион байгуулах соёлын түвшин",
    icon: <AccountTreeRounIcon />,
    bg: "linear-gradient(180deg, #E3F2FD 0%, #BBDEFB 100%)",
    accent: "rgba(255,255,255,0.62)",
    face: "sad",
  },
  {
    id: 7,
    key: "intelligence",
    title: "Оюун ухааны чадамж",
    icon: <EmojiObjectsRoundedn />,
    bg: "linear-gradient(180deg, #FFF9C4 0%, #FFF59D 100%)",
    accent: "rgba(255,255,255,0.62)",
    face: "angry",
  },
  {
    id: 8,
    key: "stress-level",
    title: "Стрессийн түвшин тогтоох",
    icon: <SpeedRoundedIcon />,
    bg: "linear-gradient(180deg, #FFE0E0 0%, #FFBABA 100%)",
    accent: "rgba(255,255,255,0.62)",
    face: "calm",
  },
  {
    id: 9,
    key: "emotion",
    title: "Сэтгэлийн хөдөлгөөн",
    icon: <EmojiEmotionsRoundedIcon />,
    bg: "linear-gradient(180deg, #E1F5FE 0%, #B3E5FC 100%)",
    accent: "rgba(255,255,255,0.62)",
    face: "sleepy",
  },
  {
    id: 10,
    key: "temperament",
    title: "Темперамент",
    icon: <ThermostatRoundedIcon />,
    bg: "linear-gradient(180deg, #FFE7F0 0%, #FFCCE0 100%)",
    accent: "rgba(255,255,255,0.62)",
    face: "love",
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
    face: "stressed",
  },
  {
    id: 13,
    key: "goal",
    title: "Зорилго",
    icon: <FlagRoundedIcon />,
    bg: "linear-gradient(180deg, #FFF3E0 0%, #FFE0B2 100%)",
    accent: "rgba(255,255,255,0.62)",
    face: "wink",
  },
  {
    id: 14,
    key: "attitude",
    title: "Хандлага (өгөх/авах)",
    icon: <SwapHorizRoundedIcon />,
    bg: "linear-gradient(180deg, #E0F7FA 0%, #B2EBF2 100%)",
    accent: "rgba(255,255,255,0.62)",
    face: "shy",
  },
  {
    id: 15,
    key: "leadership-style",
    title: "Удирдах хэв маяг",
    icon: <SupervisorAccountRoundedIcon />,
    bg: "linear-gradient(180deg, #F3E5F5 0%, #E1BEE7 100%)",
    accent: "rgba(255,255,255,0.62)",
    face: "cool",
  },
];
