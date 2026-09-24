# BookingHub - Real-Time Expert Session Booking System

BookingHub is a modern, responsive frontend web application for discovering verified industry mentors and booking 1:1 consultation sessions in real time.

---

## 👥 Contributors & Guide

- **Tushar Sharma** ([@Tusharsharma200](https://github.com/Tusharsharma200)) — University Roll No: `2628mca0074`
- **Vrinda Jindal** ([@vrindajindal21](https://github.com/vrindajindal21)) — University Roll No: `2628mca0260`
- **Project Supervisor:** Mr. Shashank Bhardwaj (Assistant Professor, Dept. of Computer Applications)
- **Institution:** KIET Group of Institutions / KIET Deemed to be University

---

## 🖥️ The 4 Core Pages

### 1. Home Page (`index.html`)
- Clean hero banner with quick call-to-actions.
- Interactive live availability preview simulator.
- Domain category explorer (Healthcare, Tech, Legal, Finance, Corporate).
- Key platform metrics counter.

### 2. Explore & Filter Experts (`search.html`)
- Instant client-side search across mentors, domains, and technologies.
- Multi-faceted filters for category, experience level, and hourly fee.
- Verified mentor cards with ratings, pricing, and profile bios.

### 3. Expert Profile & Slot Booking (`booking.html`)
- Mentor dossier with verified credentials and client reviews.
- Consultation packages with transparent pricing.
- Interactive date selector (*Today*, *Tomorrow*, *Upcoming*).
- **3-State Visual Slot Selector:**
  - 🟢 **Available Slots:** Clickable slots ready for booking.
  - 🔵 **Selected Slot:** Highlighted active selection.
  - ⚪ **Booked Slots:** Disabled slots with clear strikethrough.
- Client-side form validation before booking confirmation.

### 4. Client Sessions Dashboard (`dashboard.html`)
- KPI summary: Total Bookings, Upcoming Sessions, and Completed Consultations.
- Filter tabs: *All Bookings*, *Upcoming*, *Completed*, and *Cancelled*.
- **Session Controls:**
  - 🎥 **Join Video Call:** One-click launch to consultation meeting room.
  - 🖨️ **Print Pass / Slip:** Formatted printable consultation slip.
  - ❌ **Cancel Session:** Confirmation modal to release slots in real-time.

---

## 🛠️ Technology Stack

- **Markup:** Semantic HTML5
- **Styling:** Modern CSS3 (Flexbox, CSS Grid, Glassmorphism, CSS Variables, Responsive Design)
- **Logic:** JavaScript (ES6+)
- **Data & Storage:** Client-side mock store with browser `localStorage` persistence (zero backend setup needed)

---

## 🚀 How to Run Locally

### 1-Click Launch (Windows)
Double-click **`start_website.bat`** in the project folder. It will launch the local server and automatically open the website in your browser at `http://localhost:3000`.

### Using Python
```bash
python server.py
```
Open **`http://localhost:3000`** in Google Chrome or Microsoft Edge.
