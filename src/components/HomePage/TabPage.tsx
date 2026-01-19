"use client";

import * as React from "react";
import { Box, Tabs, Tab, Typography, alpha } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";

import { TestGrid, TestItem } from "../../app/tests/TestGrid";
import DynamicTestModal from "../../app/tests/DynamicModal"; // ✅ modal (универсал)

type TabPageProps = { children: React.ReactNode; value: number; index: number };

function TabPage({ children, value, index }: TabPageProps) {
  if (value !== index) return null;
  return (
    <Box
      sx={{
        p: { xs: 2, sm: 3 },
        color: "#fff",
        animation: "fadeUp .35s ease both",
        "@keyframes fadeUp": {
          from: { opacity: 0, transform: "translateY(6px)" },
          to: { opacity: 1, transform: "translateY(0px)" },
        },
      }}
    >
      {children}
    </Box>
  );
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
const [selected, setSelected] = React.useState<TestItem | null>(null);

  // ✅ modal state
  const [selectedTest, setSelectedTest] = React.useState<TestItem | null>(null);

  return (
    <Box
      sx={{
        mt: 2,
        width: "100vw",
        overflow: "hidden",
        // backgroundColor: alpha("#87A2FF", 0.28),
        border: `5px solid ${alpha("#87A2FF", 0.14)}`,
        backdropFilter: "blur(14px)",
      }}
    >
      <Box
        sx={{
          px: 1,
          py: 1,
          display: "flex",
          alignItems: "center",
          borderBottom: `1px solid ${alpha("#ffffff", 0.12)}`,
          background: `linear-gradient(180deg, ${alpha("#ffffff", 0.1)}, ${alpha(
            "#ffffff",
            0.02,
          )})`,
        }}
      >
        <Tabs
          value={value}
          onChange={(_, v) => setValue(v)}
          scrollButtons="auto"
          TabIndicatorProps={{ style: { display: "none" } }}
          sx={{
            minHeight: 44,
            "& .MuiTabs-flexContainer": { gap: 0.8 },
            "& .MuiTabs-scrollButtons": { color: alpha("#fff", 0.7) },
          }}
        >
          <Tab label="Сэтгэл зүйн тест" sx={tabSx(value === 0)} />
          <Tab label="Ажлын талбар" sx={tabSx(value === 1)} />
        </Tabs>
      </Box>

      {/* TAB 1 */}
      <TabPage value={value} index={0}>
        {/* ✅ Grid үргэлж харагдана */}
        <TestGrid
  onSelect={(t) => {
    setSelected(t);
    setOpen(true);
  }}
/>

        {/* ✅ Dynamic modal */}
        <DynamicTestModal
          open={!!selectedTest}
          test={selectedTest}
          onClose={() => setSelectedTest(null)}
          // нэмэлт props дамжуулж болно:
          userId="user-123"
          lang="mn"
          onSubmit={(test, payload) => {
            console.log("SUBMIT:", test.key, payload);
            setSelectedTest(null);
          }}
        />
      </TabPage>

      {/* TAB 2 */}
      <TabPage value={value} index={1}>
        <Typography sx={{ fontSize: 18, fontWeight: 800, mb: 1 }}>
          Ажлын талбар
        </Typography>
        zczc
      </TabPage>
    </Box>
  );
}

function tabSx(active: boolean): SxProps<Theme> {
  return {
    minHeight: 42,
    px: 2,
    borderRadius: 999,
    textTransform: "none",
    fontWeight: 800,
    letterSpacing: 0.2,
    backgroundColor: active ? alpha("#ffffff", 0.16) : "transparent",
    border: `1px solid ${alpha("#ffffff", active ? 0.2 : 0)}`,
    transition: "0.2s",
    "&:hover": {
      backgroundColor: alpha("#ffffff", active ? 0.18 : 0.1),
      transform: "translateY(-1px)",
    },
  };
}
