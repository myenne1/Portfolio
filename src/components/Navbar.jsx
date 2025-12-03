import React from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="fixed" color="default" elevation={1}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6">Your Name</Typography>

        <Box>
          {["Home", "Projects", "About", "Contact"].map((item) => (
            <Button
              key={item}
              href={`#${item.toLowerCase()}`}
              sx={{ textTransform: "none", mx: 1 }}
            >
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
