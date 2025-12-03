import React from "react";
import { Box, Typography } from "@mui/material";

export default function ExperienceItem({ year, role, company, location, description }) {
  return (
    <Box sx={{ position: "relative", pl: 4 }}>
      <Box
        sx={{
          width: 10,
          height: 10,
          borderRadius: "50%",
          backgroundColor: "secondary.dark",
          position: "absolute",
          left: 0,
          top: 4,
        }}
      />

      <Typography sx={{ fontSize: "0.9rem", color: "secondary.dark", fontWeight: 600 }}>
        {year}
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: 700 }}>
        {role}
      </Typography>

      <Typography sx={{ fontSize: "0.9rem", color: "text.secondary" }}>
        {company}
      </Typography>

      <Typography sx={{ fontSize: "0.9rem", color: "text.secondary", mb: 1 }}>
        {location}
      </Typography>

      <Typography sx={{ maxWidth: "600px" }}>
        {description}
      </Typography>
    </Box>
  );
}
