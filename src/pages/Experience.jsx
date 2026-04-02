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
    "Python",
    "Java",
    "React.js",
    "Node.js",
    "Next.js",
    "FastAPI",
    "Flask",
    "C",
    "HTML/CSS",
  ];

  const toolSkills = [
    "Linux",
    "Git",
    "Docker",
    "Azure DevOps",
    "Postman",
    "JIRA",
    "Cursor",
    "Firebase",
    "Supabase",
    "SQL",
    "PostgreSQL",
    "Vercel",
    "AWS S3",
    "AWS EC2",
  ];

  const jobs = [
    {
      year: "March 2026 – Present",
      role: "IT Intern",
      company: "Dealer Services Network",
      location: "Remote",
      bullets: [
        "Built an internal web application for data tracking and collection using React, TypeScript, and Vercel, used across the team to streamline daily workflows.",
        "Automated data collection by integrating Microsoft Graph API to extract and process Excel reports directly from Outlook emails on a scheduled basis.",
        "Managed and verified business entity records in Business Central, identifying and resolving data processing errors to maintain accuracy.",
      ],
    },
    {
      year: "May 2025 – August 2025",
      role: "Software Development Intern",
      company: "NOLA Education",
      location: "New Orleans, LA",
      bullets: [
        "Built an automated transcription service using OpenAI Whisper that eliminated a manual multi-step workflow for the content team, generating VTT caption files for 2,000+ English and Spanish media files.",
        "Integrated the service into a FastAPI app on Vercel with a Cron Job scanning S3 every 5 minutes, removing the need for manual uploads and handoffs.",
        "Implemented a Python Playwright scraper to migrate 5,000+ assets from Althea into Odoo, using an Odoo Sandbox to test via API before pushing to production.",
        "Led Agile ceremonies in Azure DevOps, authored Given-When-Then user stories, and worked in a Scrum environment.",
      ],
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
        Louisiana State University | August 2022 – May 2026
      </Typography>

      <Typography sx={{ mb: 0.5, fontSize: "1.1rem" }}>
        B.S. Computer Science – Software Engineering
      </Typography>

      <Typography sx={{ mb: 3, fontSize: "1rem", color: "text.secondary" }}>
        GPA: 3.5 &nbsp;·&nbsp; BASF STEM Scholarship Recipient &nbsp;·&nbsp; 3rd place WICS Geaux Hack the Globe 2024
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
      <SkillChips title="Tools & Cloud" items={toolSkills} />

      <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {jobs.map((job, idx) => (
          <ExperienceItem key={idx} {...job} />
        ))}
      </Box>
    </Box>
  );
}
