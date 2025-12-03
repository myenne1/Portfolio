// src/pages/TaskManagerPage.jsx
import React from "react";
import ProjectPage from "../components/ProjectPage";

export default function TaskManagerPage() {
  return (
    <ProjectPage
      title="Collaborative Task Management Platform"
      subtitle="React + TypeScript + Firebase Auth + Firestore"
      heroImage="/images/taskmanager-hero.png"

      description="
        A real-time task management system built with React and TypeScript,
        designed for multi-team collaboration. The platform uses Firebase Auth
        for secure user access and a structured Firestore schema to manage
        teams, users, categories, and tasks with dynamic category creation and
        role-based permissions.
      "

      techStack={[
        "React",
        "TypeScript",
        "Firebase Auth",
        "Firestore",
        "Material UI",
      ]}

      problem="
        Teams needed a simple, fast, and real-time task system that supported
        different team structures, category customization, and live updates
        without constant refreshes or manual syncing.
      "

      solution="
        The application uses Firestore listeners for instant UI updates, 
        Firebase Auth for secure identity management, and a normalized database
        schema to structure teams, categories, and tasks cleanly. Users can
        claim tasks, switch categories, and manage workloads in real-time.
      "

      features={[
        "Firebase Auth secure login/session management",
        "Normalized Firestore schema (teams, users, categories, tasks)",
        "Dynamic category creation",
        "Role-based project manager permissions",
        "Real-time updates using Firestore listeners",
        "Clean responsive layout with MUI",
      ]}

      architecture="
        Work is structured into collections for teams and users with nested
        sub-collections for categories and tasks. Firestore real-time listeners
        ensure the UI updates immediately when tasks or categories change.
      "

      gallery={[
        "/images/taskmanager1.png",
        "/images/taskmanager2.png",
        "/images/taskmanager3.png",
      ]}
    />
  );
}
