"use client";

import { useState } from "react";
import HomePage from "@/components/HomePage/main";
import LoginSplitPage from "../components/PsychologicalTest/AuthSplitPage";
import DynamicTestModal from "../components/Dynamic/DynamicModal";

import {
 
  Typography,
 
} from "@mui/material";

export default function Home() {
  const [authed, setAuthed] = useState(false);
  const [openWelcome, setOpenWelcome] = useState(false);

  const handleLoginSuccess = () => {
    setAuthed(true);        // homepage руу эрх нээх
    setOpenWelcome(true);   // welcome modal гаргах
  };

  const handleCloseWelcome = () => {
    setOpenWelcome(false);  // modal хаагдмагц homepage бүрэн харагдана
  };

  // 1) Эхлээд login
  if (!authed) {
    return <LoginSplitPage onSuccess={handleLoginSuccess} />;
  }

  // 2) Нэвтэрсний дараа homepage + welcome modal
  return (
    <>
      <HomePage />

      <DynamicTestModal
        open={openWelcome}
        onClose={handleCloseWelcome}
        test={null}
        mode="message"
        headerBg="linear-gradient(135deg, #0B3D2E 0%, #1B5E20 45%, #2E7D32 100%)"
        messageTitle="Амжилттай нэвтэрлээ 🎉"
        messageText={
          <div>
            <Typography sx={{ fontWeight: 900, mb: 0.5 }}>
              Тавтай морил!
            </Typography>
            <Typography sx={{ opacity: 0.8 }}>
            ЭНЭХҮҮ ХЭСЭГТ СЭТГЭЛ ЗҮЙН HERO ПРОГРАММД ТАВТАЙ МОРИЛ ГЭСЭН ВИДЕО ХАРУУЛНА.
            </Typography>
          </div>
        }
      />
    </>
  );
}
