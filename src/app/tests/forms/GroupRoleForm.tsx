"use client";

import * as React from "react";
import { Box, Typography, RadioGroup, FormControlLabel, Radio, Button, Stack } from "@mui/material";

export default function GroupRoleForm() {
  const [role, setRole] = React.useState("leader");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Group role submitted\nrole=${role}`);
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>

      <Stack spacing={2}>
        <RadioGroup value={role} onChange={(e) => setRole(e.target.value)}>
          <FormControlLabel value="leader" control={<Radio />} label="Манлайлагч" />
          <FormControlLabel value="thinker" control={<Radio />} label="Сэтгэгч" />
          <FormControlLabel value="doer" control={<Radio />} label="Хийцтэй (гүйцэтгэгч)" />
          <FormControlLabel value="support" control={<Radio />} label="Дэмжигч" />
        </RadioGroup>

        <Button type="submit" variant="contained">
          Илгээх
        </Button>
      </Stack>
    </Box>
  );
}
