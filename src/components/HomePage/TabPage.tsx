"use client";

import * as React from "react";
import { Box, Tabs, Tab, Typography, alpha } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";

import { TestGrid } from "../../app/tests/TestGrid";
import { TestItem } from "../../app/tests/types";

import DynamicTestModal from "../Dynamic/DynamicModal"; // ✅ modal (универсал)
import DynamicTable from "../Dynamic/DynamicTable"; // ✅ шинэ table компонент
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
        // overflow: "hidden",
        // backgroundColor: alpha("#87A2FF", 0.28),
        border: `2px solid ${alpha("#87A2FF", 0.14)}`,
        backdropFilter: "blur(14px)",
      }}
    >
      <Box
        sx={{
          px: 1,
          py: 1,
          display: "flex",
          alignItems: "center",
          borderBottom: `1px solid ${alpha("##87A2FF", 0.12)}`,
          background: `linear-gradient(180deg, ${alpha("#87A2FF", 0.1)}, ${alpha(
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
            "& .MuiTabs-scrollButtons": { color: alpha("#000", 0.7) },
          }}
        >
          <Tab label="Дашбоард" sx={tabSx(value === 0)} />

          <Tab label="Сэтгэл зүйн тест" sx={tabSx(value === 1)} />
          <Tab label="Ажлын талбар" sx={tabSx(value === 2)} />
          <Tab label=" Хүснэгт" sx={tabSx(value === 3)} />
        </Tabs>
      </Box>
      {/* дашбоард */}
      <TabPage value={value} index={2}>
        <Typography sx={{ fontSize: 18, fontWeight: 800, mb: 1 }}>
          Дашбоард
        </Typography>
        zczc
      </TabPage>
      {/*сэтгэл зүйн тест */}
      <TabPage value={value} index={1}>
        <Typography
          sx={{ fontSize: 14, fontWeight: 300, mb: 1, color: "#000" }}
        >
          Доорх тестүүдээс сонгон өөрийгөө сорьж үзээрэй!
        </Typography>
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

      {/* ажллын талбар */}
      <TabPage value={value} index={2}>
        <Typography sx={{ fontSize: 18, fontWeight: 800, mb: 1 }}>
          login
        </Typography>
        zczc
      </TabPage>
      {/* хүснэгт*/}
      <TabPage value={value} index={3}>
        <Typography sx={{ fontSize: 18, fontWeight: 800, mb: 1 }}>
          login
        </Typography>
        <DynamicTable />
      </TabPage>
    </Box>
  );
}

const tabSx = (active: boolean) => ({
  minHeight: 40,
  px: 2.2,
  borderRadius: 9,
  textTransform: "none",
  fontWeight: "bold",
  fontSize: 14,

  // ✅ үндсэн өнгө
  color: active ? "#fff" : alpha("#000", 0.65),

  // ✅ background color
  background: active
    ? "linear-gradient(135deg, #A7EBFC 0%, #fff 100%)"
    : alpha("#000", 0.05),

  // ✅ animation
  transition: "all .25s ease",

  // hover
  "&:hover": {
    background: active
      ? "linear-gradient(135deg, #A7EBFC 0%, #fff 100%)"
      : alpha("#000", 0.1),
  },

  // ripple off (optional)
  "& .MuiTouchRipple-root": {
    opacity: 0.25,
  },
});
