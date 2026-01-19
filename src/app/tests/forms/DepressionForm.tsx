"use client";

import * as React from "react";
import { Box, Typography, FormControlLabel, Checkbox, Button, Stack } from "@mui/material";

export default function DepressionForm() {
  const [a, setA] = React.useState(false);
  const [b, setB] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Depression submitted\na=${a}\nb=${b}`);
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography fontWeight={900} fontSize={18} mb={2}>
        Сэтгэл гутрал
      </Typography>

      <Stack spacing={1.2}>
        <FormControlLabel
          control={<Checkbox checked={a} onChange={(e) => setA(e.target.checked)} />}
          label="Сүүлийн 2 долоо хоногт гунигтай мэдрэмж давамгайлсан"
        />
        <FormControlLabel
          control={<Checkbox checked={b} onChange={(e) => setB(e.target.checked)} />}
          label="Унтах хэв маяг алдагдсан"
        />

        <Button sx={{ mt: 1 }} type="submit" variant="contained">
          Илгээх
        </Button>
      </Stack>
    </Box>
  );
}
