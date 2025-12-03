import React from "react";
import {
  Box,
  Typography,
  Paper,
  Chip,
  Stack,
  Button,
  useTheme,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { Link } from "react-router-dom";

export default function Projects() {
  const theme = useTheme();

  const projects = [
    {
      id: "stock-platform",
      title: "Real-time Stock Analysis Platform",
      description:
        "A platform that streams live market data, displays dynamic price charts, and uses machine learning to grade stocks based on volatility, liquidity, and market cap patterns.",
      stack: ["React", "Javascript", "Python", "Scikit Learn", "Pandas"],
    },
    {
      id: "caption-service",
      title: "Closed Captioning Automation Service",
      description:
        "A backend system that detects new media files in S3, generates VTT captions using Whisper, and stores results back into cloud storage with full automation.",
      stack: ["Python", "Vercel", "AWS S3", "FastAPI"],
    },
    {
      id: "mlfq",
      title: "MLFQ CPU Scheduler",
      description:
        "A full simulation of a four-level Multilevel Feedback Queue scheduler in C, including round-robin logic, I O blocking, priority promotions, and demotions.",
      stack: ["C"],
    },
    {
      id: "amazon-bot",
      title: "Amazon Seller Order Tracking Bot",
      description:
        "A Python service that listens for new Amazon orders through the SP API, sends Telegram alerts in real time, and stores structured order data in Supabase.",
      stack: ["Python", "Supabase", "Vercel"],
    },
    {
      id: "task-platform",
      title: "Task Management Platform",
      description:
        "A full stack task system featuring Firebase authentication, real time Firestore syncing, team roles, category creation, and dynamic task organization.",
      stack: ["React", "Typescript", "Firebase"],
    },
  ];

  return (
    <Box
      sx={{
        maxWidth: "1200px",
        mx: "auto",
        px: 2,
        py: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingRight: 10
      }}
    >
      <Typography variant="h4" textAlign="center" mb={1}>
        Projects
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        textAlign="center"
        mb={6}
      >
        A selection of the systems and tools I have built. Each project has its
        own story, challenges, and technical decisions.
      </Typography>

      {/* FLEX WRAP GRID */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
          width: "100%",
        }}
      >
        {projects.map((project) => (
          <Paper
            key={project.id}
            elevation={0}
            sx={{
              width: {
                xs: "100%",               // 1 per row on mobile
                sm: "calc(50% - 16px)",   // 2 per row on larger screens
              },
              p: 4,
              borderRadius: 2,
              border: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
              background: `linear-gradient(135deg, ${alpha(
                theme.palette.secondary.light,
                0.15
              )}, ${theme.palette.background.paper})`,
              transition: "0.2s ease",
              "&:hover": {
                borderColor: theme.palette.primary.main,
                boxShadow: theme.shadows[4],
              },
            }}
          >
            <Typography variant="h5" color="primary.main" fontWeight={700}>
              {project.title}
            </Typography>

            <Typography
              variant="body1"
              mt={1.5}
              mb={2}
              color="text.secondary"
              sx={{ lineHeight: 1.6 }}
            >
              {project.description}
            </Typography>

            {/* STACK TAGS */}
            <Stack direction="row" spacing={1} flexWrap="wrap" mb={3}>
              {project.stack.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  sx={{
                    backgroundColor: alpha(theme.palette.secondary.light, 0.4),
                    border: `1px solid ${theme.palette.secondary.main}`,
                    color: theme.palette.primary.main,
                  }}
                />
              ))}
            </Stack>

            <Button
              variant="contained"
              sx={{
                backgroundColor: theme.palette.primary.main,
                color: "white",
                borderRadius: 2,
                px: 3,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark,
                },
              }}
              component={Link}
              to={`/projects/${project.id}`}
            >
              Read More
            </Button>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}
