"use client";

import * as React from "react";
import HomePage from "@/components/HomePage/main";
import { Box } from "@mui/material";

import { TestGrid } from "./TestGrid";
import type { TestItem } from "./types";
import DynamicTestModal from "../../components/Dynamic/DynamicModal";

export default function Home() {
  const [selected, setSelected] = React.useState<TestItem | null>(null);

  const handleSubmit = (test: TestItem, payload: any) => {
    console.log("SUBMIT:", test.key, payload);

    // энд API дуудах боломжтой:
    // await axios.post("/api/tests/submit", { testKey: test.key, payload })

    setSelected(null);
  };

  return (
    <>
      <HomePage />

      <Box sx={{ p: { xs: 2, md: 3 } }}>
        <TestGrid onSelect={setSelected} />
      </Box>

      <DynamicTestModal
        open={!!selected}
        test={selected}
        onClose={() => setSelected(null)}
        userId="user-123" // жишээ
        lang="mn"
        onSubmit={handleSubmit}
      />
    </>
  );
}
