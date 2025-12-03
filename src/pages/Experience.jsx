import React from "react";
import { Box, Button, Typography } from "@mui/material";
import ExperienceItem from "../components/ExperienceItem";
import SkillChips from "../components/SkillChips";
import theme from "../theme/theme";
import ResumeFile from '../assets/resume.pdf'

export default function Experience() {
  const primarySkills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "C",
    "SQL",
    "Firebase",
    "Supabase",
  ];

  const toolSkills = [
    "AWS S3",
    "AWS EC2",
    "Docker",
    "Vercel",
    "REST APIs",
    "WebSockets",
    "Git",
    "GitHub",
    "Material UI",
    "FastAPI",
    "OpenAI Whisper",
    "Supabase Storage",
    "Amazon SP-API",
  ];

  const jobs = [
    {
      year: "May 2025 - August 2025",
      role: "Software Developer Intern",
      company: "NOLA Education",
      location: "New Orleans",
      description:
        "Developed a automated VTT generator, a Python Playwright scraper to transfer data from Althea to Odoo, edited XML files to reflect new changes in legacy slide player.",
    },
    {
      year: "August 2023 - May 2024",
      role: "Student Mentor",
      company: "LSU Center for Academic Success",
      location: "Baton Rouge, LA",
      description:
        "Mentored first generation college students and held office hours for appointments",
    },
  ];

  return (
    <Box sx={{ px: 2, py: 10, maxWidth: "900px", mx: "auto" }}>
      <Typography variant="h3" sx={{ mb: 4, fontWeight: 700 }}>
        Experience
      </Typography>

      <Typography
        sx={{
          fontSize: "1.1rem",
          mb: 1,
          color: "secondary.dark",
          fontWeight: 600,
        }}
      >
        Louisiana State University | August 2022 - May 2026
      </Typography>

      <Typography sx={{ mb: 3, fontSize: "1.1rem" }}>
        Software Engineering - Computer Science
      </Typography>
      <Button
        variant="contained"
        href={ResumeFile}
        target="_blank"
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: "white",
          borderRadius: 2,
          px: 5,
          textTransform: "none",
          "&:hover": {
            backgroundColor: theme.palette.primary.dark,
          },
          marginBottom: '15px'
        }}
      >
       View Resume
      </Button>

      <SkillChips title="Primary Stack" items={primarySkills} />
      <SkillChips title="Mobile, Tools & Cloud" items={toolSkills} />

      <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {jobs.map((job, idx) => (
          <ExperienceItem key={idx} {...job} />
        ))}
      </Box>
    </Box>
  );
}
