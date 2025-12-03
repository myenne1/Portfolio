import React from "react";
import { Box, Chip, Typography } from "@mui/material";

export default function SkillChips({ title, items }) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        sx={{
          fontSize: "0.9rem",
          mb: 1,
          fontWeight: 600,
          color: "secondary.dark",
        }}
      >
        {title}
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {items.map((item) => (
          <Chip
            key={item}
            label={item}
            sx={{
              backgroundColor: "secondary.light",
              border: "1px solid",
              borderColor: "secondary.main",
              color: "primary.main",
              borderRadius: "6px",
              fontSize: "0.85rem",
              px: 1,
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
