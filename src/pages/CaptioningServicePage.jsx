// src/pages/CaptioningServicePage.jsx
import React from "react";
import ProjectPage from "../components/ProjectPage";

export default function CaptioningServicePage() {
  return (
    <ProjectPage
      title="AI-Powered Closed Captioning Automation Service"
      subtitle="Python • Whisper AI • AWS S3 • Supabase • EC2"
      heroImage="/images/captioning-hero.png"

      description="
        A backend automation system that processes uploaded educational media
        files and generates VTT captions using Whisper AI. Outputs are converted
        into structured JSON and uploaded back into Supabase. The system runs on
        an EC2 instance and continuously scans S3 for new content.
      "

      techStack={[
        "Python",
        "Whisper (OpenAI)",
        "AWS S3",
        "Supabase",
        "EC2",
        "Argos Translate",
      ]}

      problem="
        Teachers needed fast, automated closed captioning for lesson videos
        without manually uploading files or generating subtitles themselves.
      "

      solution="
        A continuous worker service scans S3 for new files, downloads media,
        generates transcriptions using Whisper, converts them into VTT and JSON,
        and uploads structured results into Supabase for the lesson player.
      "

      features={[
        "Automatic transcription via Whisper",
        "VTT → JSON conversion for caption rendering",
        "Automated S3 scanning every 5 minutes",
        "Supabase integration for updating lesson rows",
        "Optional Spanish translation via Argos",
        "Runs reliably on an EC2 instance",
      ]}

      architecture="
        When a media file is uploaded, S3 metadata timestamps determine whether
        it needs processing. The worker retrieves the file, runs Whisper, parses
        the VTT output, produces structured JSON, and uploads it to Supabase.
      "
    />
  );
}
