// src/pages/SchedulerPage.jsx
import React from "react";
import ProjectPage from "../components/ProjectPage";

export default function SchedulerPage() {
  return (
    <ProjectPage
      title="Multilevel Feedback Queue CPU Scheduler"
      subtitle="C • OS Simulation • I/O Blocking • Promotion/Demotion Rules"
      heroImage="/images/scheduler-hero.png"

      description="
        A full simulation of a four-level Multilevel Feedback Queue scheduler.
        Includes round-robin scheduling, time slicing, I/O blocking behavior,
        queue promotion/demotion rules, and tick-accurate process simulation.
      "

      techStack={["C", "Operating Systems", "Round Robin", "MLFQ"]}

      problem="
        Operating system students often struggle to visualize how MLFQ scheduling
        interacts with compute bursts, I/O phases, and priority aging.
      "

      solution="
        A detailed simulation that processes instruction scripts and outputs
        timeline-accurate scheduling decisions, including I/O unblocking and
        queue transitions.
      "

      features={[
        "4-level priority queue system",
        "Round-robin scheduling per level",
        "Compute/I-O phase simulation",
        "Accurate tick-by-tick timing",
        "Promotion/demotion logic",
        "Full sample-output matching",
      ]}

      architecture="
        Each process maintains counters for run bursts and I/O cycles. A dispatcher
        tracks current quantum length, while the ready queue structure cycles
        processes according to MLFQ rules. Unblocking logic reinserts tasks into
        correct queues.
      "
    />
  );
}
