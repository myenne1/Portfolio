import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

export default function Home() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        px: theme.spacing(3),
        textAlign: "left",
        background: `radial-gradient(circle at 20% 20%, ${theme.palette.primary.light}22, transparent 30%), radial-gradient(circle at 80% 30%, ${theme.palette.secondary.light}26, transparent 32%)`,
        pl: { xs: 4, sm: 8, md: 50 },
      }}
    >
      <Typography variant="h2" fontWeight={700} mb={2} color="primary" sx={{ fontSize: { xs: "2rem", sm: "2.8rem", md: "3.75rem" } }}>
        Muhanad Yennes
      </Typography>

      <Typography variant="h5" maxWidth="600px" color="text.secondary" sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}>
        Software Developer
      </Typography>

      <Typography variant="h5" maxWidth="600px" color="text.secondary" sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}>
        Building full stack applications, automating workflows, and shipping systems that work.
      </Typography>
    </Box>
  );
}
