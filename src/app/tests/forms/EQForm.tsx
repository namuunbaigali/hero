"use client";

import * as React from "react";
import { Box, Typography, TextField, Button, Stack, alpha, LinearProgress } from "@mui/material";
import type { TestFormProps } from "../testFormMap";

export default function EQForm({ test, onClose, onSubmit }: TestFormProps) {
  const [name, setName] = React.useState("");
  const [q1, setQ1] = React.useState("");
  const [q2, setQ2] = React.useState("");

  const total = 3;
  const filled = [name, q1, q2].filter((x) => x.trim().length > 0).length;
  const percent = Math.round((filled / total) * 100);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      name,
      q1,
      q2,
      submittedAt: new Date().toISOString(),
      testKey: test.key,
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
    

      <LinearProgress
        variant="determinate"
        value={percent}
        sx={{
          height: 10,
          borderRadius:'50%' ,
          mb: 2,
          bgcolor: alpha("#000", 0.10),
          "& .MuiLinearProgress-bar": { borderRadius: 999 },
        }}
      />

      <Stack spacing={1.8}>
        <TextField label="Нэр" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
        <TextField label="1-р асуулт" value={q1} onChange={(e) => setQ1(e.target.value)} fullWidth />
        <TextField label="2-р асуулт" value={q2} onChange={(e) => setQ2(e.target.value)} fullWidth />

        <Box sx={{ display: "flex", gap: 1.2, justifyContent: "flex-end" }}>
          <Button type="button" variant="outlined" onClick={onClose} sx={{ borderRadius: 2 }}>
            Хаах
          </Button>
          <Button type="submit" variant="contained" disabled={filled !== total} sx={{ borderRadius: 2 }}>
            Илгээх
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
