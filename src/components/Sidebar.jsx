import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const theme = useTheme();
  const { pathname } = useLocation();

  const links = [
    { label: "Home", to: "/" },
    { label: "Projects", to: "/projects" },
    { label: "Experience", to: "/experience" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <Box
      sx={{
        position: "fixed",
        zIndex: 1000,
        right: theme.spacing(5),
        top: "50%",
        transform: "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(4),
        "@media (max-width: 1200px)": {
          right: 0,
          left: 0,
          top: "unset",
          bottom: 0,
          transform: "none",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: theme.spacing(3),
          padding: theme.spacing(1.25, 0),
          background: alpha(theme.palette.background.paper, 0.92),
          borderTop: `1px solid ${theme.palette.divider}`,
          backdropFilter: "blur(6px)",
        },
      }}
    >
      {links.map((link) => (
        <Typography
          key={link.to}
          component={Link}
          to={link.to}
          sx={{
            textDecoration: "none",
            fontSize: "1.8rem",
            fontWeight: 600,
            color:
              pathname === link.to
                ? theme.palette.text.primary
                : theme.palette.text.secondary,
            transition: "0.2s",

            "&:hover": {
              color: theme.palette.primary.dark,
              transform: "translateX(-5px)",

              "@media (max-width: 700px)": {
                transform: "none",
              },
            },

            "@media (max-width: 700px)": {
              fontSize: "1.2rem",
            },
          }}
        >
          {link.label}
        </Typography>
      ))}
    </Box>
  );
}
