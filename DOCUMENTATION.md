# XULO School ERP - System Documentation

## Overview
XULO is a next-generation, cloud-based School Management System built with React and a premium Glassmorphism UI. It features 20+ functional modules, AI-powered tools (Lesson Planner, exam generator), and a robust role-based architecture.

## Tech Stack
- **Framework**: React 18 (Vite)
- **Styling**: Tailwind CSS + Custom CSS Variables (Glassmorphism)
- **Icons**: Lucide React
- **Charts**: Recharts
- **State**: Context API (Auth, Theme, **Data**)
- **Persistence**: LocalStorage (Realtime Data Saving)

## Quick Start (Run Locally)
1. **Prerequisites**: Node.js v16+
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Run Development Server**:
   ```bash
   npm run dev
   ```
   > App runs at `http://localhost:5173`. Changes save automatically to your browser.

## Realtime Features & Data Usage
XULO uses a persistent LocalStorage database (`DataContext`). Meaning:
- **Add Students**: Go to Admissions -> Add Student. The count on Dashboard updates immediately.
- **Add Staff**: Go to HR.
- **Persistence**: Refreshing the page **keeps your data**.
- **Reset**: To clear all data, clear your browser's Local Storage or use the "Reset System" button in Settings.

## Module Guide
### Core
- **Dashboard**: Realtime stats from your database.
- **Authentication**: Secure login with role-based simulation.
- **Settings**: Theme toggles (Dark/Light).

### Academics
- **SIS**: Student registration and profile management.
- **Gradebook**: Academic performance tracking.
- **Timetable**: AI-powered weekly scheduling.
- **Lesson Planner**: Automated curriculum planning.
- **Online Exams**: Digital assessment portal.

### Administration
- **HR & Payroll**: Staff management.
- **Finance**: Fee collection.
- **Library**: Book catalog.
- **Inventory & Store**: Asset management.
- **Transport**: Vehicle tracking.

## Deployment (Go Live)
To run this as a real application on a server:
1. **Build the App**:
   ```bash
   npm run build
   ```
2. **Serve**:
   copy the `dist` folder to any web server (Netlify, Vercel, Apache, Nginx).

## Troubleshooting
- **Build Errors**: Ensure `@tailwindcss/postcss` is installed.
- **Blank Screen**: Check `ErrorBoundary` logs or verify CSS variables.
- **Data Not Saving**: Ensure your browser allows LocalStorage.

---
© 2024 XULO Education Systems. All Rights Reserved.
