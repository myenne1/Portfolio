// src/components/ProjectPage.jsx
import React from "react";
import { Box, Paper, Typography, Chip, Grid } from "@mui/material";

export default function ProjectPage({
  title,
  subtitle,
  description,
  techStack = [],
  problem,
  solution,
  features = [],
  architecture,
  heroImage,
  gallery = [],
  extraContent
}) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: 6,
        px: 2,
        backgroundColor: "#f6f6fa",
      }}
    >
      {/* TITLE */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="h6" sx={{ color: "text.secondary" }}>
            {subtitle}
          </Typography>
        )}
      </Box>

      {/* MAIN PAPER */}
      <Paper
        elevation={5}
        sx={{
          borderRadius: 4,
          p: 5,
          maxWidth: "900px",
          mx: "auto",
        }}
      >
        {/* DESCRIPTION */}
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
          Overview
        </Typography>
        <Typography sx={{ mb: 4, lineHeight: 1.7, fontSize: "1.05rem" }}>
          {description}
        </Typography>

        {/* TECH STACK */}
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
          Tech Stack
        </Typography>
        <Box sx={{ mb: 4 }}>
          {techStack.map((t) => (
            <Chip
              key={t}
              label={t}
              color="primary"
              variant="outlined"
              sx={{ mr: 1, mb: 1 }}
            />
          ))}
        </Box>

        {/* PROBLEM */}
        {problem && (
          <>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
              Problem
            </Typography>
            <Typography sx={{ mb: 4, lineHeight: 1.7 }}>{problem}</Typography>
          </>
        )}

        {/* SOLUTION */}
        {solution && (
          <>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
              Solution
            </Typography>
            <Typography sx={{ mb: 4, lineHeight: 1.7 }}>{solution}</Typography>
          </>
        )}

        {/* FEATURES */}
        {features.length > 0 && (
          <>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
              Key Features
            </Typography>

            <ul style={{ marginBottom: "32px" }}>
              {features.map((f) => (
                <li key={f} style={{ marginBottom: "10px", fontSize: "1.05rem" }}>
                  {f}
                </li>
              ))}
            </ul>
          </>
        )}

        {/* ARCHITECTURE */}
        {architecture && (
          <>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
              Architecture Overview
            </Typography>

            <Typography sx={{ mb: 4, lineHeight: 1.7 }}>
              {architecture}
            </Typography>
          </>
        )}

        {/* EXTRA custom content */}
        {extraContent && <Box sx={{ mt: 4 }}>{extraContent}</Box>}
      </Paper>

      {/* GALLERY */}
      {gallery.length > 0 && (
        <Grid
          container
          spacing={3}
          sx={{ mt: 5, maxWidth: "1100px", mx: "auto" }}
        >
          {gallery.map((img, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Paper
                elevation={4}
                sx={{ borderRadius: 0, overflow: "hidden" }}
              >
                <Box
                  component="img"
                  src={img}
                  alt={`Gallery ${i}`}
                  sx={{ width: 800 }}
                />
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
