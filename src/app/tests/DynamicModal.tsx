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
import type { TestItem } from "./TestGrid";
import { TEST_FORM_REGISTRY, TestFormProps, FormPayload } from "./testFormMap";

type Props = {
  open: boolean;
  test: TestItem | null;
  onClose: () => void;

  // form дээр дамжуулах нэмэлт мэдээлэл:
  userId?: string;
  lang?: "mn" | "en";

  // submit-г parent дээр барина:
  onSubmit?: (test: TestItem, payload: FormPayload) => void;
};

export default function DynamicTestModal({
  open,
  test,
  onClose,
  userId,
  lang = "mn",
  onSubmit,
}: Props) {
  const Form = test ? TEST_FORM_REGISTRY[test.key] : undefined;

  const handleSubmit: TestFormProps["onSubmit"] = (payload) => {
    if (!test) return;
    onSubmit?.(test, payload);
  };

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
        //   background: `linear-gradient(180deg, ${alpha("#0b1220", 0.92)}, ${alpha(
        //     "#0b1220",
        //     0.78
        //   )})`,
          backdropFilter: "blur(16px)",
          boxShadow: `0 28px 90px ${alpha("#000", 0.55)}`,
        },
      }}
    >
      {/* Header */}
      <Box
        sx={{
          px: { xs: 2, md: 3 },
          py: 2,
          display: "flex",
          alignItems: "center",
          gap: 2,
          borderBottom: `1px solid ${alpha("#000", 0.12)}`,
        }}
      >
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography sx={{ color: "#000", fontWeight: 950, fontSize: 18 }}>
            {test?.title ?? "Тест"}
          </Typography>
          <Typography sx={{ color: alpha("#000", 0.65), mt: 0.3, fontSize: 14 }}>
            Бөглөөд “Илгээх” дарна уу.
          </Typography>
        </Box>

        <IconButton
          onClick={onClose}
          sx={{
            color: "#000",
            bgcolor: alpha("#000", 0.08),
            border: `1px solid ${alpha("#000", 0.12)}`,
            "&:hover": { bgcolor: alpha("#000", 0.12) },
          }}
        >
          <CloseRoundedIcon />
        </IconButton>
      </Box>

      <DialogContent sx={{ p: { xs: 2, md: 3 } }}>
        {test && Form ? (
          <Form test={test} onClose={onClose} onSubmit={handleSubmit} userId={userId} lang={lang} />
        ) : (
          <Typography sx={{ color: "#000" }}>
            {test ? "Энэ тестийн form одоогоор алга байна." : ""}
          </Typography>
        )}
      </DialogContent>
    </Dialog>
  );
}
