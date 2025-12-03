import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import profile_pic from '../assets/muhanads_profile_picture.jpg'

export default function About() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
        py: 8,
        gap: 6,
        paddingRight: 25
      }}
    >
      <Paper
      component='img'
      src={profile_pic}
        sx={{
          width: 375,
          backgroundColor: "secondary.light",
          borderRadius: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
        }}
      >
      </Paper>

      <Paper
        sx={{
          maxWidth: 900,
          p: 4,
          backgroundColor: "background.paper",
          borderRadius: 2,
          textAlign: "left",
          boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            mb: 2,
            fontWeight: 700,
          }}
        >
          About Me
        </Typography>

        <Typography sx={{ lineHeight: 1.65, fontSize: "1.3rem" }}>
        I’m Moe, a software engineering student at Louisiana State University with a strong interest in backend systems, automation, and full stack development. I enjoy building software that runs reliably in the background and improves the way people work.
        <br/>
        <br/>
        Recently I've been exploring machine learning and expanding my experience with cloud platforms. I also run an Amazon Private Label business, which has helped me develop a practical understanding of operations, consistency, and the value of automation in real environments.
        <br/>
        <br/>
        At the moment I'm focused on becoming a stronger full stack engineer. I'm currently learning Material UI to create more clean and modern UIs. I'm also strengthening my backend skills with machine learning, FastAPI, and AWS. My goal is to keep improving, keep shipping useful projects, and continue growing as a developer.
        <br/>
        <br/>
        </Typography>
      </Paper>
    </Box>
  );
}
