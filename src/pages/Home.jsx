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
        paddingLeft: 50
      }}
    >
      <Typography variant="h2" fontWeight={700} mb={2} color="primary" fontFamily="">
        Muhanad Yennes
      </Typography>

      <Typography variant="h5" maxWidth="600px" color="text.secondary">
        Backend Developer and Fullstack Designer.
      </Typography>

      <Typography variant="h5" maxWidth="600px" color="text.secondary">
        I solve problems by creating and
        automating systems to put more time into developers' hands.
      </Typography>
    </Box>
  );
}
