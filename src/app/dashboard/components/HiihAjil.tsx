"use client";

import * as React from "react";
import {
  Paper,
  Typography,
  Box,
  alpha,
  useTheme,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  Chip,
  Divider,
} from "@mui/material";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";

type TodoItem = {
  id: string;
  title: string;
  done: boolean;
};

const INITIAL_TODOS: TodoItem[] = [
  { id: "1", title: "Алба хаагчдын темперамент тодорхойлох судалгаа хийх.", done: true },
  { id: "2", title: "Судалгааны үр дүнг үндэслэн алба хаагчдын багийг дахин зохион байгуулах.", done: false },
  { id: "3", title: "Багийн гишүүдийн хоорондын харилцааг сайжруулах сургалт зохион байгуулах.", done: false },
  { id: "4", title: "Алба хаагчдын ажлын бүтээмжийг нэмэгдүүлэх арга замыг судлах.", done: false },
  { id: "5", title: "Судалгааны үр дүнг удирдлагуудад танилцуулах.", done: false },
];

export default function ZarMedee() {
  const theme = useTheme();
  const [todos, setTodos] = React.useState<TodoItem[]>(INITIAL_TODOS);

  const doneCount = todos.filter((t) => t.done).length;

  const toggleDone = (id: string) => {
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  return (
    <Paper
      sx={{
        p: 2.5,
        borderRadius: 4,
        height: 300,
        overflow: "hidden",
        position: "relative",
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
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1.5 }}>
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
              boxShadow: `0 10px 25px ${alpha("#7C7BF2", 0.22)}`,
            }}
          >
            <AssignmentRoundedIcon sx={{ color: "#fff" }} />
          </Box>

          <Box>
            <Typography fontWeight={'bold'} color="#2C394B" lineHeight={1.1}>
              Хийх ажил
            </Typography>
            <Typography fontSize={12} sx={{ opacity: 0.75, color: "#2C394B" }}>
              Өнөөдрийн checklist
            </Typography>
          </Box>
        </Box>

        <Chip
          icon={<CheckRoundedIcon />}
          label={`${doneCount}/${todos.length} done`}
          size="small"
          sx={{
            fontWeight: 'medium',
            bgcolor: alpha("#FFFFFF", 0.7),
            border: `1px solid ${alpha("#2C394B", 0.12)}`,
            backdropFilter: "blur(10px)",
          }}
        />
      </Box>

      <Divider sx={{ borderColor: alpha("#2C394B", 0.12), mb: 0.3 }} />

      {/* List */}
      <List
        dense
        sx={{
          mt: 0.5,
          maxHeight: 210,
          overflow: "auto",
          pr: 0.5,
          "&::-webkit-scrollbar": { width: 6 },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: alpha("#2C394B", 0.22),
            borderRadius: 999,
          },
        }}
      >
        {todos.map((t) => (
          <ListItemButton
            key={t.id}
            onClick={() => toggleDone(t.id)}
            sx={{
              mb: 0.75,
              borderRadius: 2.5,
              border: `1px solid ${alpha("#2C394B", 0.10)}`,
              backgroundColor: alpha("#FFFFFF", 0.55),
              backdropFilter: "blur(10px)",
              transition: "all .18s ease",
              "&:hover": {
                transform: "translateY(-1px)",
                boxShadow: `0 10px 25px ${alpha("#2C394B", 0.10)}`,
                backgroundColor: alpha("#FFFFFF", 0.75),
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 36 }}>
              <Checkbox
                checked={t.done}
                onChange={() => toggleDone(t.id)}
                onClick={(e) => e.stopPropagation()}
                sx={{
                  p: 0.5,
                  "&.Mui-checked": { color: "#7C7BF2" },
                }}
              />
            </ListItemIcon>

            <ListItemText
              primary={t.title}
              primaryTypographyProps={{
                sx: {
                  color: "#2C394B",
                  fontWeight: 'medium',
                  fontSize: 12,
                  textDecoration: t.done ? "line-through" : "none",
                  opacity: t.done ? 0.55 : 1,
                },
              }}
            />
          </ListItemButton>
        ))}
      </List>
    </Paper>
  );
}
