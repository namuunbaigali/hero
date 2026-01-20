 
 "use client";

import * as React from "react";
import { Box, Typography, Slider, Button, Stack } from "@mui/material";

export default function FamilyForm() {
  const [score, setScore] = React.useState<number>(50);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Family submitted\nscore=${score}`);
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
     

      <Stack spacing={2}>
        <Typography>Харилцааны ерөнхий үнэлгээ: {score}</Typography>

        <Slider
          value={score}
          onChange={(_, v) => setScore(v as number)}
          min={0}
          max={100}
          step={1}
        />

        <Button type="submit" variant="contained">
          Илгээх
        </Button>
      </Stack>
    </Box>
  );
}
