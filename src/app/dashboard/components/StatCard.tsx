import { Paper, Typography, Box } from "@mui/material";

type Item = { label: string; value: number; color: string };

type Props = {
  title: string;
  total: number;
  items: Item[];
};

function Donut({
  items,
  size = 64,
  stroke = 10,
}: {
  items: Item[];
  size?: number;
  stroke?: number;
}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;

  const sum = items.reduce((a, b) => a + b.value, 0) || 1;

  let acc = 0;
  return (
    <Box sx={{ width: size, height: size, position: "relative" }}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{ transform: "rotate(-90deg)" }}
      >
        {/* track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="#ECEEF6"
          strokeWidth={stroke}
        />
        {items.map((it, idx) => {
          const frac = it.value / sum;
          const dash = frac * c;
          const gap = c - dash;
          const offset = (acc / sum) * c;
          acc += it.value;

          return (
            <circle
              key={idx}
              cx={size / 2}
              cy={size / 2}
              r={r}
              fill="none"
              stroke={it.color}
              strokeWidth={stroke}
              strokeDasharray={`${dash} ${gap}`}
              strokeDashoffset={-offset}
              strokeLinecap="round"
            />
          );
        })}
      </svg>

      {/* center text */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          display: "grid",
          placeItems: "center",
        }}
      >
        <Typography sx={{ fontSize: 14, fontWeight: 900, color: "#111827" }}>
          {Math.round(((items[0]?.value ?? 0) / sum) * 100)}%
        </Typography>
      </Box>
    </Box>
  );
}

export default function StatCard({ title, total, items }: Props) {
  const sum = items.reduce((a, b) => a + b.value, 0) || 1;

  return (
    <Paper
      sx={{
        p: 2.5,
        borderRadius: 4,
        boxShadow: "0 12px 30px rgba(0,0,0,.08)",
        height: 120,
      }}
    >
      <Typography variant="caption" color="text.secondary">
        Анхаарах шаардлагатай асуудал{" "}
      </Typography>

      <Box
        sx={{
          mt: 1.2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Box>
          <Typography variant="h4" sx={{ lineHeight: 1 }}>
            shgfdshfdhascdgc{" "}
          </Typography>
          <Typography sx={{ fontSize: 12, color: "text.secondary", mt: 0.4 }}>
            Нийт оноо
          </Typography>
        </Box>

        {/* <Donut items={items} /> */}
      </Box>

      {/* ✅ legend (илүү ойлгомжтой болгоно) */}
    </Paper>
  );
}
