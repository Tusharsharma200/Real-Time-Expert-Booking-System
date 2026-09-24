// ==========================================================================
// REAL-TIME EXPERT SESSION BOOKING SYSTEM
// Core Application Logic: Data Management, Navigation, & Notifications
// ==========================================================================

const STORAGE_KEY_BOOKINGS = 'expertlink_user_bookings_v2';

// Initialize default demo bookings if none exist
function initBookings() {
  const existing = localStorage.getItem(STORAGE_KEY_BOOKINGS);
  if (!existing || JSON.parse(existing).length === 0) {
    localStorage.setItem(STORAGE_KEY_BOOKINGS, JSON.stringify(INITIAL_DEMO_BOOKINGS));
  }
}

// Retrieve all bookings from LocalStorage
function getBookings() {
  initBookings();
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY_BOOKINGS)) || [];
  } catch (e) {
    console.error('Error reading bookings:', e);
    return [];
  }
}

// Save a new booking
function createBooking(bookingData) {
  const bookings = getBookings();
  const newBooking = {
    id: 'BK-' + new Date().getFullYear() + '-' + Math.floor(1000 + Math.random() * 9000),
    createdAt: new Date().toISOString(),
    status: 'Confirmed',
    meetingLink: 'https://meet.google.com/exp-meet-' + Math.random().toString(36).substring(2, 7),
    ...bookingData
  };
  bookings.unshift(newBooking);
  localStorage.setItem(STORAGE_KEY_BOOKINGS, JSON.stringify(bookings));
  return newBooking;
}

// Update status of booking (e.g. Cancelled)
function updateBookingStatus(bookingId, newStatus) {
  const bookings = getBookings();
  const updated = bookings.map(b => b.id === bookingId ? { ...b, status: newStatus } : b);
  localStorage.setItem(STORAGE_KEY_BOOKINGS, JSON.stringify(updated));
  return updated;
}

// Toast notification helper
function showToast(message, type = 'success') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast-item toast-${type} animate-slide-in`;
  const icon = type === 'success' ? '✅' : (type === 'error' ? '⚠️' : 'ℹ️');
  toast.innerHTML = `<span class="toast-icon">${icon}</span> <span class="toast-text">${message}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('toast-fade-out');
    setTimeout(() => toast.remove(), 400);
  }, 3200);
}

// Render Main Navigation Header (Clean, Modern SaaS Navbar - No Academic Banners)
function renderMainNavbar(activePage) {
  const mountEl = document.getElementById('navbar-mount');
  if (!mountEl) return;

  const bookings = getBookings();
  const upcomingCount = bookings.filter(b => b.status === 'Confirmed').length;

  mountEl.innerHTML = `
    <header class="main-header glass-card">
      <div class="nav-wrapper">
        <a href="index.html" class="brand-logo" aria-label="Home">
          <div class="brand-symbol">✨</div>
          <div class="brand-text">
            <span class="brand-main">Booking<span class="text-gradient">Hub</span></span>
            <span class="brand-sub">Real-Time Expert Sessions</span>
          </div>
        </a>

        <nav class="main-nav-links" aria-label="Main Navigation">
          <a href="index.html" class="nav-link ${activePage === 'home' ? 'active' : ''}">
            <span class="nav-icon">🏠</span> Home
          </a>
          <a href="search.html" class="nav-link ${activePage === 'search' ? 'active' : ''}">
            <span class="nav-icon">🔍</span> Explore Experts
          </a>
          <a href="booking.html" class="nav-link ${activePage === 'booking' ? 'active' : ''}">
            <span class="nav-icon">📅</span> Book Session
          </a>
          <a href="dashboard.html" class="nav-link ${activePage === 'dashboard' ? 'active' : ''}">
            <span class="nav-icon">📊</span> My Bookings
            ${upcomingCount > 0 ? `<span class="nav-counter-badge">${upcomingCount}</span>` : ''}
          </a>
        </nav>

        <div class="nav-right-actions">
          <div class="student-profile-chip" title="Active Client Profile">
            <div class="chip-avatar">VJ</div>
            <div class="chip-text">
              <span class="chip-name">Vrinda Jindal</span>
              <span class="chip-role">Active Member</span>
            </div>
          </div>
          <a href="search.html" class="btn btn-primary btn-sm pulse-glow">
            Book an Expert
          </a>
        </div>
      </div>
    </header>
  `;
}

// Render Professional Commercial Product Footer
function renderFooter() {
  const mountEl = document.getElementById('footer-mount');
  if (!mountEl) return;

  mountEl.innerHTML = `
    <footer class="main-footer">
      <div class="footer-container">
        <div class="footer-grid">
          <div class="footer-col brand-col">
            <div class="brand-logo">
              <span class="brand-symbol">✨</span>
              <span class="brand-main">Booking<span class="text-gradient">Hub</span></span>
            </div>
            <p class="footer-desc">
              The real-time marketplace for 1:1 expert consultations, live calendar slot booking, and verified professional advisory across technology, healthcare, finance, and legal domains.
            </p>
            <div class="trust-pill-row">
              <span class="trust-mini-tag">🔒 End-to-End Encrypted</span>
              <span class="trust-mini-tag">⚡ Zero Double-Booking</span>
              <span class="trust-mini-tag">⭐ 4.95 Rating</span>
            </div>
          </div>

          <div class="footer-col">
            <h4 class="footer-heading">Platform Pages</h4>
            <ul class="footer-links">
              <li><a href="index.html">Home & Overview</a></li>
              <li><a href="search.html">Explore Verified Experts</a></li>
              <li><a href="booking.html">Instant Slot Booking</a></li>
              <li><a href="dashboard.html">Client Sessions Dashboard</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4 class="footer-heading">Specialized Domains</h4>
            <ul class="footer-links">
              <li><a href="search.html?category=tech">IT & Cloud Architecture</a></li>
              <li><a href="search.html?category=health">Healthcare & Clinical Advisory</a></li>
              <li><a href="search.html?category=finance">Startup Finance & Valuation</a></li>
              <li><a href="search.html?category=legal">Corporate Law & IP Rights</a></li>
              <li><a href="search.html?category=academic">EdTech & Research Mentorship</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p>© 2026 BookingHub Inc. All rights reserved. Real-Time Expert Session Booking System.</p>
          <div class="footer-bottom-badges">
            <span class="badge-mini">Client-Side Validation</span>
            <span class="badge-mini">Real-Time Slot Engine</span>
            <span class="badge-mini">Local State Persistence</span>
          </div>
        </div>
      </div>
    </footer>
  `;
}

// Print / Download Booking Pass Slip
function printBookingSlip(bookingId) {
  const bookings = getBookings();
  const b = bookings.find(item => item.id === bookingId);
  if (!b) return showToast('Booking record not found', 'error');

  const slipHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Consultation Pass - ${b.id}</title>
        <style>
          body { font-family: 'Segoe UI', Tahoma, -apple-system, sans-serif; padding: 40px; color: #0f172a; background: #fff; }
          .pass-box { max-width: 640px; margin: 0 auto; border: 2px solid #4F46E5; border-radius: 16px; padding: 36px; box-shadow: 0 10px 30px rgba(0,0,0,0.08); }
          .header { border-bottom: 2px dashed #cbd5e1; padding-bottom: 24px; text-align: center; }
          .brand { font-size: 24px; font-weight: 800; color: #4F46E5; letter-spacing: -0.5px; }
          .title { font-size: 18px; font-weight: 700; color: #1e293b; margin-top: 4px; }
          .id-badge { display: inline-block; background: #EEF2FF; color: #4338CA; border: 1px solid #C7D2FE; padding: 6px 16px; border-radius: 9999px; font-weight: 700; margin-top: 14px; font-size: 14px; }
          .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 28px 0; }
          .item label { display: block; font-size: 11px; text-transform: uppercase; color: #64748b; font-weight: 700; letter-spacing: 0.5px; }
          .item span { font-size: 15px; font-weight: 700; color: #0f172a; margin-top: 2px; display: block; }
          .status { display: inline-block; background: #dcfce7; color: #15803D; padding: 4px 12px; border-radius: 6px; font-weight: 700; font-size: 13px; }
          .topic-box { background: #f8fafc; border: 1px solid #e2e8f0; padding: 14px 18px; border-radius: 8px; font-size: 13px; margin-bottom: 24px; line-height: 1.5; }
          .footer { border-top: 1px solid #e2e8f0; padding-top: 20px; font-size: 12px; color: #64748b; text-align: center; }
        </style>
      </head>
      <body>
        <div class="pass-box">
          <div class="header">
            <div class="brand">BookingHub</div>
            <div class="title">OFFICIAL CONSULTATION SESSION PASS</div>
            <div class="id-badge">BOOKING PASS: ${b.id}</div>
          </div>
          <div class="grid">
            <div class="item"><label>Client Name</label><span>${b.clientName || 'Vrinda Jindal'}</span></div>
            <div class="item"><label>Email Contact</label><span>${b.clientEmail || 'client@example.com'}</span></div>
            <div class="item"><label>Expert Specialist</label><span>${b.expertName}</span></div>
            <div class="item"><label>Service Package</label><span>${b.serviceTitle}</span></div>
            <div class="item"><label>Scheduled Date & Time</label><span>${b.dateText} · ${b.timeSlot}</span></div>
            <div class="item"><label>Status</label><span class="status">${b.status}</span></div>
            <div class="item"><label>Consultation Fee</label><span>₹${b.price}</span></div>
            <div class="item"><label>Meeting Room</label><span>${b.meetingLink}</span></div>
          </div>
          <div class="topic-box">
            <strong style="color: #1e293b;">Session Agenda:</strong> ${b.topic || 'General 1:1 Consultation & Mentorship'}
          </div>
          <div class="footer">
            Generated by BookingHub Real-Time Expert Session Booking System · Please join 5 minutes before scheduled start time.
          </div>
        </div>
      </body>
    </html>
  `;

  const printWindow = window.open('', '_blank');
  printWindow.document.write(slipHtml);
  printWindow.document.close();
  printWindow.focus();
  setTimeout(() => {
    printWindow.print();
  }, 350);
}

// Global initialization on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initBookings();
});
