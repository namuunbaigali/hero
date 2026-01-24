import { Box, Grid, Paper, alpha, useTheme } from "@mui/material";
import HeaderCard from "./components/HeaderCard";
import BarChart from "./components/BarChart";
import LineCard from "./components/TuluvluguuniiYvts";
import ZarMedee from "./components/HiihAjil";
import WaterChart from "./components/Temperament";
import GutralCard from "./components/GutralCard";
import FooterCard from "./components/FooterCard";

export default function Dashboard() {

  // con= {
  //   borderRadius: 4,
  //   backdropFilter: "blur(18px)",
  //   overflow: "hidden",
  //   border: `1px solid ${alpha(isDark ? "#fff" : "#000", 0.08)}`,
  //   background: isDark
  //     ? `linear-gradient(180deg, ${alpha("#111827", 0.85)} 0%, ${alpha("#0B1220", 0.9)} 100%)`
  //     : `linear-gradient(180deg, ${alpha("#ffffff", 0.78)} 0%, ${alpha("#ffffff", 0.56)} 100%)`,
  // };

  // ✅ lg дээр зүүн/баруун баганын нийт өндрийг ижил болгох
  const rowHeightLg = 720; // хүссэнээрээ тааруул (650-820 гэх мэт)

  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Grid container spacing={2} alignItems="stretch">
        {/* LEFT (lg=6): Header + Chart */}
        <Grid
          size={{ xs: 12, md: 6, lg: 6 }}
          sx={{
            height: { lg: rowHeightLg },
            display: "flex",
            flexDirection: "column",
            minHeight: 0,
            gap: 2,
          }}
        >
          {/* HeaderCard өндөр нь auto */}
          <Box sx={{ flex: "0 0 auto" }}>
            <HeaderCard />
          </Box>

          {/* BarChart үлдсэн зайг дүүргэнэ */}
            <BarChart />
        </Grid>

        {/* RIGHT (lg=6): (LineCard + ZarMedee) дээр, доор нь BIG CARD */}
        <Grid
          size={{ xs: 12, md: 6, lg: 6 }}
          sx={{
            height: { lg: rowHeightLg },
            display: "flex",
            flexDirection: "column",
            minHeight: 0,
          }}
        >
          {/* Дотор нь nested grid */}
          <Grid container spacing={2} sx={{ flex: "1 1 auto", minHeight: 0 }}>
            {/* TOP LEFT */}
            <Grid
              size={{ xs: 12, md: 6, lg: 6 }}
              sx={{ display: "flex", minHeight: 0 }}
            >
              <Box sx={{  flex: 1, minHeight: 0 }}>
                <Box sx={{mb:2}}>
                  <LineCard />
                </Box>
                <Box sx={{mt:2}}>

                <WaterChart /> 
                </Box>
              </Box>
            </Grid>

            {/* TOP RIGHT */}
            <Grid
              size={{ xs: 12, md: 6, lg: 6 }}
              sx={{ display: "flex", minHeight: 0 }}
            >
              <Box sx={{  flex: 1, minHeight: 0 }}>
                <Box sx={{ mb: 2 }}>
                  <ZarMedee />
                </Box>
                <Box sx={{ mt: 2 }}>
                  <GutralCard />
                  
                </Box>
              </Box>
            </Grid>

            {/* ✅ BIG CARD зөвхөн энэ хэсгийн доор (lg=12 дотор нь) */}
            <Grid
              size={{ xs: 12, md: 12, lg: 12 }}
            >
                {/* энд том card-ын контент */}
                <FooterCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
