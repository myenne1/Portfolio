// src/pages/OrderTrackingPage.jsx
import React from "react";
import ProjectPage from "../components/ProjectPage";

export default function OrderTrackingPage() {
  return (
    <ProjectPage
      title="Amazon Order Tracking & Notification Bot"
      subtitle="Python • Supabase • Amazon SP-API • Telegram API"
      heroImage="/images/orderbot-hero.png"

      description="
        A Python automation tool that listens for new Amazon orders using the
        Amazon SP-API and sends instant Telegram notifications. Supabase is used
        to store order data and prevent duplicate messages.
      "

      techStack={[
        "Python",
        "Amazon SP-API",
        "Supabase",
        "Telegram Bot API",
        "Cron Jobs",
      ]}

      problem="
        Sellers wanted a fast, reliable, and real-time way to monitor Amazon
        orders without checking Seller Central repeatedly throughout the day.
      "

      solution="
        The bot queries SP-API for new orders, checks Supabase to prevent
        duplicates, and sends instant Telegram messages for every new sale.
      "

      features={[
        "Real-time order notifications",
        "Supabase duplicate-prevention logic",
        "Simple environment-based setup for non-technical users",
        "Supports Vercel or local cron-based scheduling",
        "Lightweight, low-cost architecture",
      ]}

      architecture="
        SP-API → Python parser → Supabase order table → Telegram message push.
        A scheduled job checks for new orders every 60 seconds and triggers
        notifications only when new order IDs appear.
      "
    />
  );
}
