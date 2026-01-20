import { Paper, Box, Typography, LinearProgress, alpha } from "@mui/material";

const data = [
  { label: "Consultations", value: 64, color: "#5C6BC0" },
  { label: "Analysis", value: 50, color: "#FF8A65" },
  { label: "Meetings", value: 33, color: "#EC407A" },
];

export default function WaterChart() {
  return (
    <Paper sx={{ p: 3, borderRadius: 4 }}>
      <Typography fontWeight={800} mb={2}>
        MY PLANS DONE
      </Typography>

      {data.map((i) => (
        <Box key={i.label} mb={2}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 0.5,
            }}
          >
            <Typography>{i.label}</Typography>
            <Typography>{i.value}%</Typography>
          </Box>

          <LinearProgress
            variant="determinate"
            value={i.value}
            sx={{
              height: 8,
              borderRadius: 3,
              bgcolor: alpha(i.color, 0.2),
              "& .MuiLinearProgress-bar": {
                bgcolor: i.color,
              },
            }}
          />
        </Box>
      ))}
    </Paper>
  );
}
