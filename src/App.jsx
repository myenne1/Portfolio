import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/PageTransition";
import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import StockAnalysisPage from "./pages/StockAnalysisPage";
import CaptioningServicePage from "./pages/CaptioningServicePage";
import SchedulerPage from "./pages/SchedulerPage";
import AmazonServicePage from "./pages/AmazonServicePage";
import TaskManagerPage from "./pages/TaskManagerPage";

export default function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <Sidebar />
      <Box
        component="main"
        sx={{
          pt: { xs: 6, md: 0 },
          pb: { xs: 8, md: 0 },
        }}
      >
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/experience" element={<Experience />} />
              <Route
                path="/projects/stock-platform"
                element={<StockAnalysisPage />}
              />
              <Route
                path="/projects/caption-service"
                element={<CaptioningServicePage />}
              />
              <Route path="/projects/mlfq" element={<SchedulerPage />} />
              <Route
                path="/projects/amazon-bot"
                element={<AmazonServicePage />}
              />
              <Route
                path="/projects/task-platform"
                element={<TaskManagerPage />}
              />
            </Routes>
          </PageTransition>
        </AnimatePresence>
      </Box>
    </Box>
  );
}
