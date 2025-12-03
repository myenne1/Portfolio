
import React from "react";
import ProjectPage from "../components/ProjectPage";
import stock_image_1 from '../assets/Stock_image1.png'
import stock_image_2 from '../assets/Stock_image2.png'
import stock_image_3 from '../assets/Stock_image3.png'

export default function StockAnalysisPage() {
  return (
    <ProjectPage
      title="Real-Time Stock & Crypto Analysis Platform"
      subtitle="React + Vite + MUI • Python Data Engine • TwelveData API"
      heroImage="/images/stock-hero.png"

      description="
        A fast, interactive dashboard for analyzing historical stock and crypto data.
        It combines a React front-end with a Python-based grading engine to compute
        volatility, liquidity, and market cap using the last 90 trading days.
      "

      techStack={[
        "React",
        "Vite",
        "Material UI",
        "Python",
        "Pandas",
        "TwelveData API",
        "Node",
      ]}

      problem="
        Most beginner stock dashboards only show raw charts, not deeper metrics
        that help evaluate the stability or investment quality of a stock.
      "

      solution="
        The platform computes volatility, liquidity, and market cap automatically.
        A Python script processes historical data, grades each stock, and the React
        interface displays clean summaries and interactive time-series charts.
      "

      features={[
        "Real-time stock & crypto search",
        "90-day trend chart with dynamic dataset",
        "Custom grading algorithm for investment quality",
        "Volatility & liquidity calculation engine",
        "Responsive UI with interactive mouse-hover data",
        "Automatic error-handling for missing or broken tickers",
      ]}

      architecture="
        The system fetches data from TwelveData, which is passed to a Python
        processing script. This script computes volatility, liquidity, and
        market cap using the last 90 days of closing prices and returns a
        graded dataset. The React front-end renders line charts and statistical
        summaries using a clean MUI layout.
      "

      gallery={[stock_image_1, stock_image_2, stock_image_3]}
    />
  );
}
