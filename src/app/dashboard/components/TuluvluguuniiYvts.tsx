"use client";

import * as React from "react";
import {
  Paper,
  Typography,
  Box,
  Checkbox,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Chip,
  Divider,
  alpha,
  useTheme,
} from "@mui/material";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

type PlanItem = {
  id: string;
  title: string;
  done: boolean;
};

const PLAN_DATA: PlanItem[] = [
  {
    id: "1",
    title: "Алба хаагчдын темперамент тодорхойлох судалгаа хийх",
    done: false,
  },
  {
    id: "2",
    title:
      "Судалгааны үр дүнг үндэслэн алба хаагчдын багийг дахин зохион байгуулах",
    done: true,
  },
  {
    id: "3",
    title:
      "Багийн гишүүдийн хоорондын харилцааг сайжруулах сургалт зохион байгуулах",
    done: true,
  },

];

export default function ZarMedee() {
  const theme = useTheme();
  const [plans, setPlans] = React.useState<PlanItem[]>(PLAN_DATA);

  const doneCount = plans.filter((p) => p.done).length;

  const toggle = (id: string) => {
    setPlans((prev) =>
      prev.map((p) => (p.id === id ? { ...p, done: !p.done } : p))
    );
  };

  return (
    <Paper
      sx={{
        p: 2.5,
        borderRadius: 4,
        height: 300,
        position: "relative",
        overflow: "hidden",
           background: `linear-gradient(180deg,
             ${alpha("#C4D9FF", 0.95)} 0%,
             ${alpha("#E8F9FF", 0.9)} 45%,
             ${alpha("#FFFFFF", 0.95)} 100%)`,
           border: `1px solid ${alpha("#2C394B", 0.12)}`,
           boxShadow: `0 18px 50px ${alpha("#2C394B", 0.12)}`,
      }}
    >
          {/* soft blobs */}
           <Box
             sx={{
               position: "absolute",
               right: -60,
               top: -70,
               width: 180,
               height: 180,
               borderRadius: "50%",
               background: `radial-gradient(circle at 30% 30%,
                 ${alpha(theme.palette.primary.main, 0.35)} 0%,
                 ${alpha(theme.palette.primary.main, 0)} 60%)`,
               pointerEvents: "none",
             }}
           />
           <Box
             sx={{
               position: "absolute",
               left: -70,
               bottom: -90,
               width: 240,
               height: 240,
               borderRadius: "50%",
               background: `radial-gradient(circle at 60% 40%,
                 ${alpha("#7C7BF2", 0.22)} 0%,
                 ${alpha("#7C7BF2", 0)} 60%)`,
               pointerEvents: "none",
             }}
           />

      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 1.5,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={{
              width: 36,
              height: 36,
              borderRadius: 2.5,
              display: "grid",
              placeItems: "center",
            background: `linear-gradient(135deg,
                           ${alpha("#7C7BF2", 0.95)} 0%,
                           ${alpha("#5EC6FF", 0.85)} 100%)`,
              boxShadow: `0 8px 20px ${alpha("#7C7BF2", 0.35)}`,
            }}
          >
            <TimelineRoundedIcon sx={{ color: "#fff" }} />
          </Box>

          <Box>
            <Typography fontWeight={'bold'} lineHeight={1.1}>
              Төлөвлөгөөний явц
            </Typography>
            <Typography fontSize={12} sx={{ opacity: 0.65 }}>
              Гүйцэтгэлийн хяналт
            </Typography>
          </Box>
        </Box>

        <Chip
          icon={<CheckCircleRoundedIcon />}
          label={`${doneCount}/${plans.length} гүйцэтгэсэн`}
          size="small"
          sx={{
            fontWeight: 'medium',
            bgcolor: alpha("#fff", 0.7),
            border: `1px solid ${alpha("#000", 0.12)}`,
            backdropFilter: "blur(10px)",
          }}
        />
      </Box>

      <Divider sx={{ mb: 0.3, borderColor: alpha("#000", 0.1) }} />

      {/* List */}
      <List
        dense
        sx={{
          maxHeight: 215,
          overflow: "auto",
          pr: 0.5,
          "&::-webkit-scrollbar": { width: 6 },
          "&::-webkit-scrollbar-thumb": {
            bgcolor: alpha("#000", 0.2),
            borderRadius: 10,
          },
        }}
      >
        {plans.map((item) => (
          <ListItemButton
            key={item.id}
            onClick={() => toggle(item.id)}
            sx={{
              mb: 0.75,
              borderRadius: 2.5,
              border: `1px solid ${alpha("#000", 0.08)}`,
              backgroundColor: alpha("#fff", 0.6),
              transition: "all .18s ease",
              "&:hover": {
                transform: "translateY(-1px)",
                boxShadow: `0 8px 20px ${alpha("#000", 0.1)}`,
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 36 }}>
              <Checkbox
                checked={item.done}
                onClick={(e) => e.stopPropagation()}
                sx={{
                  p: 0.5,
                  "&.Mui-checked": {
                    color: theme.palette.primary.main,
                  },
                }}
              />
            </ListItemIcon>

            <ListItemText
              primary={item.title}
              primaryTypographyProps={{
                sx: {
                  fontSize: 13,
                  fontWeight: 'medium',
                  textDecoration: item.done ? "line-through" : "none",
                  opacity: item.done ? 0.55 : 1,
                },
              }}
            />
          </ListItemButton>
        ))}
      </List>
    </Paper>
  );
}
