"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  IconButton,
  alpha,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import type { TestItem } from "../../app/tests/types";
import { TEST_FORM_REGISTRY, TestFormProps, FormPayload } from "../../app/tests/testFormMap";

type Props = {
  open: boolean;
  test: TestItem | null;
  onClose: () => void;

  userId?: string;
  lang?: "mn" | "en";
  onSubmit?: (test: TestItem, payload: FormPayload) => void;

  // ✅ нэмнэ
  mode?: "form" | "message";
  messageTitle?: string;
  messageText?: React.ReactNode;
  headerBg?: string; // test байхгүй үед header-ийн bg
};


export default function DynamicTestModal({
  open,
  test,
  onClose,
  userId,
  lang = "mn",
  onSubmit,

  mode = "form",
  messageTitle,
  messageText,
  headerBg,
}: Props) {
  const Form = test ? TEST_FORM_REGISTRY[test.key] : undefined;

  const handleSubmit: TestFormProps["onSubmit"] = (payload) => {
    if (!test) return;
    onSubmit?.(test, payload);
  };

  const title =
    mode === "message" ? messageTitle ?? "Мэдэгдэл" : test?.title ?? "Тест";

  const subTitle =
    mode === "message" ? null : "Бөглөөд “Илгээх” дарна уу.";

  const headerBackground = test?.bg ?? headerBg ?? alpha("#fff", 0.9);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      PaperProps={{
        sx: {
          overflow: "hidden",
          borderRadius: 4,
          border: `1px solid ${alpha("#000", 0.18)}`,
          backdropFilter: "blur(16px)",
          boxShadow: `0 28px 90px ${alpha("#000", 0.55)}`,
        },
      }}
    >
      <Box
        sx={{
          px: { xs: 2, md: 3 },
          py: 2,
          display: "flex",
          alignItems: "center",
          gap: 2,
          borderBottom: `1px solid ${alpha("#000", 0.12)}`,
          background: headerBackground,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            opacity: 0.55,
            background: `
              radial-gradient(220px 140px at 20% 20%, ${alpha("#fff", 0.75)} 0%, transparent 60%),
              radial-gradient(220px 140px at 80% 10%, ${alpha("#fff", 0.45)} 0%, transparent 60%)
            `,
          }}
        />

        <Box sx={{ flex: 1, minWidth: 0, position: "relative" }}>
          <Typography sx={{ color: alpha("#111", 0.88), fontWeight: 950, fontSize: 18 }}>
            {title}
          </Typography>

          {subTitle ? (
            <Typography sx={{ color: alpha("#111", 0.6), mt: 0.3, fontSize: 14 }}>
              {subTitle}
            </Typography>
          ) : null}
        </Box>

        <IconButton
          onClick={onClose}
          sx={{
            position: "relative",
            color: alpha("#111", 0.85),
            bgcolor: alpha("#fff", 0.55),
            border: `1px solid ${alpha("#fff", 0.7)}`,
            backdropFilter: "blur(10px)",
            "&:hover": { bgcolor: alpha("#fff", 0.7) },
          }}
        >
          <CloseRoundedIcon />
        </IconButton>
      </Box>

      <DialogContent sx={{ p: { xs: 2, md: 3 } }}>
        {mode === "message" ? (
          <Box sx={{ color: "#000" }}>
            {messageText ?? "Амжилттай."}
          </Box>
        ) : test && Form ? (
          <Form
            test={test}
            onClose={onClose}
            onSubmit={handleSubmit}
            userId={userId}
            lang={lang}
          />
        ) : (
          <Typography sx={{ color: "#000" }}>
            {test ? "Энэ тестийн form одоогоор алга байна." : ""}
          </Typography>
        )}
      </DialogContent>
    </Dialog>
  );
}

