# Real-Time Expert Session Booking System (BookingHub)
> **Course:** Front End Web Development (Course Code: `26CA205PCB`) · **40 Marks Project Submission**  
> **Institution:** Department of Computer Applications, KIET Deemed To Be University, Delhi-NCR  
> **Session:** 2026-2027 (I Semester - MCA)

---

## 👥 Student & Supervisor Credentials
- **Student 1:** Tushar Sharma (University Roll No: `2628mca0074`)
- **Student 2:** Vrinda Jindal (University Roll No: `2628mca0260`)
- **Project Supervisor:** Mr. Shashank Bhardwaj (Assistant Professor, Dept. of Computer Applications)

---

## 📌 Project Overview
The **Real-Time Expert Session Booking System** is a responsive, multi-page frontend web application designed for seamless discovery and consultation scheduling with verified industry mentors. Built for the **Front End Web Development (26CA205PCB)** curriculum, it demonstrates modern component-based UI engineering, client-side form validation, interactive calendar slot selection with clear visual availability states, and local session persistence.

---

## 🖥️ 4 Core Pages (Showcase & Evaluation Architecture)

### 1. Home / Landing Page (`/`)
- **Hero Showcase:** Modern headline (*"One Platform. Every Business. Zero Missed Bookings."*), value proposition, and call-to-actions.
- **Interactive Availability Simulator:** Live interactive preview of real-time slot selection and booking states.
- **Industry Domain Pills:** Direct navigation across Healthcare, Corporate Advisory, Media, EdTech, Legal, and Cloud/IT Support.
- **3-Step Consultation Workflow:** Step-by-step pipeline illustrating mentor discovery, visual slot picking, and instant session pass generation.
- **Key Metrics Counter:** Live counters for active sessions, verified expert community, and client satisfaction.

### 2. Search & Category Filter Page (`/search`)
- **Instant Client-Side Search:** Real-time search query matching across mentor names, domains, credentials, and technologies without full-page reloads.
- **Multi-Faceted Sidebar Filters:**
  - Specialization Domain (Healthcare, IT/Cloud, Legal, Finance, EdTech).
  - Experience Level dropdown (Any, 5+ yrs, 10+ yrs, 15+ yrs).
  - Minimum/Maximum Fee slider with live readout.
  - Sorting dropdown (Top Rated, Most Experienced, Fee: Low-to-High, Fee: High-to-Low).
- **Verified Mentor Cards:** Cards with profile pictures, ratings, experience tags, session modes, and quick booking links.

### 3. Expert Profile & Interactive Slot Booking (`/hub/:id`)
- **Mentor Dossier:** Comprehensive credentials for specialists (e.g., Dr. Aarav Sharma, Rohan Verma, Adv. Priya Malhotra), verification badges, and client reviews.
- **Consultation Packages:** Multiple service options with duration and transparent pricing.
- **Interactive Calendar:** Date selector chips (*Today*, *Tomorrow*, *Upcoming*).
- **Visual Slot Selector (3 Clear States):**
  - 🟢 **Available Slots:** Clickable green chips.
  - 🔵 **Selected Slot:** Highlighted primary blue indicator.
  - ⚪ **Booked Slots:** Disabled locked slots with strikethrough.
- **Client-Side Form Validation:** Real-time validation for Full Name, Email, Contact Number, and Consultation Agenda notes before confirmation.
- **Instant Booking Confirmation:** Auto-generates reference pass ID and saves directly to client storage.

### 4. Client Sessions Dashboard (`/dashboard`)
- **Personalized Header:** Active user greeting and profile status.
- **KPI Summary Cards:** Total Bookings, Upcoming Sessions, Completed Consultations, and Hours Mentored.
- **Session Filter Tabs:** Filter between *All Bookings*, *Upcoming (Confirmed)*, *Completed*, and *Cancelled*.
- **Session Management Controls:**
  - 🎥 **Join Video Call:** One-click launch to Google Meet consultation room.
  - 🖨️ **Download Pass / Receipt:** Opens formatted printable consultation slip.
  - ❌ **Cancel Session:** Confirmation modal releases the time slot and updates client storage in real-time.

---

## 🛠️ Technology Stack
- **Structure & Markup:** Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<aside>`, `<footer>`)
- **Styling & Layout:** Modern CSS3, Flexbox, CSS Grid, Glassmorphism, CSS Variables, and Responsive Media Queries (Mobile to Desktop)
- **Client-Side Scripting:** JavaScript (ES6+), React.js, Vite
- **Icons & Visuals:** Lucide React, SVG vector graphics
- **State & Storage:** Client-side mock store with browser `localStorage` persistence

---

## 🚀 How to Run Locally

### Option 1: 1-Click Batch Runner (Windows)
Double-click `start_website.bat` in the project root. It will start the local server and automatically open the application in your browser at `http://localhost:3000`.

### Option 2: Python Web Server
```bash
# Run from repository root
python server.py
```
Open **`http://localhost:3000`** in Google Chrome, Microsoft Edge, or Mozilla Firefox.

---

## 📄 Academic Evaluation Reference
- **Course:** Front End Web Development (`26CA205PCB`)
- **Department:** Department of Computer Applications, KIET Deemed To Be University
- **Deliverable:** 100% Client-Side Responsive Web Application (Semester 1 Evaluation - 40 Marks)
