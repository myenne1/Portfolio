// src/components/ProjectPage.jsx
import React from "react";
import { Box, Paper, Typography, Chip } from "@mui/material";

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
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 1, fontSize: { xs: "1.8rem", md: "3rem" } }}>
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="h6" sx={{ color: "text.secondary", fontSize: { xs: "0.95rem", md: "1.25rem" } }}>
            {subtitle}
          </Typography>
        )}
      </Box>

      {/* MAIN PAPER */}
      <Paper
        elevation={5}
        sx={{
          borderRadius: 4,
          p: { xs: 2, sm: 3, md: 5 },
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
        <Box
          sx={{
            mt: 6,
            maxWidth: "900px",
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 600, textAlign: "center" }}>
            Screenshots
          </Typography>
          {gallery.map((img, i) => (
            <Box
              key={i}
              component="img"
              src={img}
              alt={`Screenshot ${i + 1}`}
              sx={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: 3,
                boxShadow: "0 4px 24px rgba(0,0,0,0.13)",
                border: "1px solid rgba(0,0,0,0.07)",
              }}
            />
          ))}
        </Box>
      )}
    </Box>
  );
}
