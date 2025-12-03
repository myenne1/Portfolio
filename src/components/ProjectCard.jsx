import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

export default function ProjectCard({ title, description }) {
  return (
    <Card
      sx={{
        height: "100%",
        borderRadius: 2,
        backgroundColor: "secondary.light",
        border: "1px solid",
        borderColor: "secondary.main",
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
      }}
    >
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
          {title}
        </Typography>
        <Typography sx={{ color: "primary.main", opacity: 0.85, lineHeight: 1.5 }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
