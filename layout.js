// layout.js - Dynamically injects header and footer into any page

(function () {
  const headerContainer = document.getElementById('main-header');
  const footerContainer = document.getElementById('main-footer');

  if (!headerContainer || !footerContainer) return;

  // ----- Header HTML -----
  const headerHTML = `
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Cormorant+Garamond:wght@700&display=swap');

      .hcx-navbar * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Poppins', sans-serif; }

      .hcx-navbar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1000;
        background: #cc0000;
        box-shadow: 0 2px 10px rgba(0,0,0,0.3);
      }

      /* ── TOP ROW ── */
      .hcx-top-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 7px 32px;
        background: #cc0000;
        border-bottom: 1px solid rgba(255,255,255,0.15);
      }

      .hcx-top-left {
        display: flex;
        align-items: center;
        gap: 20px;
        flex-wrap: wrap;
      }

      .hcx-top-left a {
        color: #fff;
        text-decoration: none;
        font-size: 12.5px;
        font-weight: 500;
      }

      .hcx-city-select {
        display: flex;
        align-items: center;
        gap: 8px;
        background: #fff;
        border-radius: 4px;
        padding: 4px 10px;
        cursor: pointer;
      }

      .hcx-city-select span {
        font-size: 12.5px;
        color: #333;
        font-weight: 500;
      }

      .hcx-city-select svg {
        width: 12px;
        height: 12px;
        fill: none;
        stroke: #555;
        stroke-width: 2;
      }

      .hcx-top-right {
        display: flex;
        align-items: center;
        gap: 18px;
        flex-shrink: 0;
      }

      .hcx-top-right > a {
        color: #fff;
        text-decoration: none;
        font-size: 12.5px;
        font-weight: 500;
      }

      .hcx-socials {
        display: flex;
        align-items: center;
        gap: 6px;
      }

      .hcx-socials a {
        color: #fff;
        width: 28px;
        height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        transition: background 0.2s;
        text-decoration: none;
      }

      .hcx-socials a:hover { background: rgba(255,255,255,0.18); }

      .hcx-socials svg {
        width: 16px;
        height: 16px;
        fill: #fff;
      }

      .hcx-redbox {
        width: 36px;
        height: 36px;
        background: #aa0000;
      }

      /* ── BOTTOM ROW ── */
      .hcx-bottom-row {
        display: flex;
        align-items: stretch;
        background: #cc0000;
        min-height: 64px;
      }

      /* Logo */
      .hcx-logo {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 20px;
        min-width: 220px;
        text-decoration: none;
        flex-shrink: 0;
      }

      .hcx-logo-icon {
        width: 42px;
        height: 42px;
        background: rgba(255,255,255,0.2);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .hcx-logo-icon svg {
        width: 22px;
        height: 22px;
        fill: none;
        stroke: #fff;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
      }

      .hcx-logo-texts { display: flex; flex-direction: column; }

      .hcx-logo-name {
        font-family: 'Cormorant Garamond', serif;
        font-size: 20px;
        font-weight: 700;
        color: #fff;
        line-height: 1.1;
        letter-spacing: 0.3px;
      }

      .hcx-logo-name span { color: #ffd0d0; }

      .hcx-logo-tag {
        font-size: 10px;
        color: rgba(255,255,255,0.75);
        font-weight: 400;
      }

      /* Diagonal separator */
      .hcx-diagonal {
        width: 0;
        height: 0;
        border-top: 64px solid #cc0000;
        border-right: 30px solid transparent;
        flex-shrink: 0;
        align-self: flex-start;
      }

      /* Nav links area */
      .hcx-nav-area {
        flex: 1;
        display: flex;
        align-items: stretch;
        background: #fff;
        padding: 0 4px;
        overflow-x: auto;
      }

      .hcx-nav-area ul {
        display: flex;
        align-items: stretch;
        list-style: none;
        height: 100%;
      }

      .hcx-nav-area ul li {
        display: flex;
        align-items: stretch;
      }

      .hcx-nav-area ul li a {
        display: flex;
        align-items: center;
        padding: 0 18px;
        color: #222;
        text-decoration: none;
        font-size: 13.5px;
        font-weight: 500;
        white-space: nowrap;
        border-bottom: 3px solid transparent;
        transition: all 0.2s ease;
      }

      .hcx-nav-area ul li a:hover {
        color: #cc0000;
        border-bottom: 3px solid #cc0000;
      }

      .hcx-nav-area ul li a.hcx-active {
        color: #cc0000;
        border-bottom: 3px solid #cc0000;
        font-weight: 600;
      }

      /* Right buttons */
      .hcx-nav-right {
        display: flex;
        align-items: center;
        gap: 12px;
        background: #fff;
        padding: 0 16px 0 10px;
        flex-shrink: 0;
      }

      .hcx-vendor-btn {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 13px;
        color: #333;
        font-weight: 500;
        white-space: nowrap;
        cursor: pointer;
        background: none;
        border: none;
        font-family: 'Poppins', sans-serif;
      }

      .hcx-vendor-btn svg {
        width: 18px;
        height: 18px;
        stroke: #cc0000;
        fill: none;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
      }

      .hcx-get-quote {
        background: #cc0000;
        color: #fff;
        border: none;
        padding: 9px 20px;
        border-radius: 4px;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        font-family: 'Poppins', sans-serif;
        white-space: nowrap;
        transition: background 0.2s;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 6px;
      }

      .hcx-get-quote:hover { background: #aa0000; }

      /* ── MOBILE TOGGLE ── */
      .hcx-mobile-toggle {
        display: none;
        align-items: center;
        justify-content: center;
        background: rgba(255,255,255,0.15);
        border: none;
        padding: 8px 14px;
        cursor: pointer;
        align-self: center;
        margin-right: 12px;
        border-radius: 4px;
        transition: background 0.2s;
      }

      .hcx-mobile-toggle:hover {
        background: rgba(255,255,255,0.25);
      }

      .hcx-mobile-toggle svg {
        width: 24px;
        height: 24px;
        stroke: #fff;
        fill: none;
        stroke-width: 2;
        stroke-linecap: round;
        transition: all 0.3s ease;
      }

      /* ── MOBILE PANEL ── */
      .hcx-mobile-panel {
        display: flex;
        flex-direction: column;
        background: #1a0000;
        padding: 0 24px;
        gap: 0;
        border-top: 1px solid rgba(255,255,255,0.1);
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.4s ease, padding 0.3s ease;
      }

      .hcx-mobile-panel.open {
        max-height: 600px;
        padding: 12px 24px 24px;
      }

      .hcx-mobile-panel a {
        color: rgba(255,255,255,0.85);
        text-decoration: none;
        font-size: 15px;
        font-weight: 500;
        padding: 13px 0;
        border-bottom: 1px solid rgba(255,255,255,0.08);
        transition: color 0.2s, padding-left 0.2s;
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .hcx-mobile-panel a::before {
        content: '';
        width: 0;
        height: 2px;
        background: #cc0000;
        transition: width 0.2s ease;
        flex-shrink: 0;
      }

      .hcx-mobile-panel a:hover::before {
        width: 16px;
      }

      .hcx-mobile-panel a:hover {
        color: #fff;
      }

      .hcx-mobile-panel a:last-child { border-bottom: none; }

      .hcx-mobile-panel .hcx-mobile-quote {
        background: #cc0000;
        color: #fff !important;
        text-align: center;
        padding: 12px !important;
        border-radius: 6px;
        margin-top: 12px;
        font-weight: 600;
        border-bottom: none !important;
        justify-content: center;
        transition: background 0.2s !important;
      }

      .hcx-mobile-panel .hcx-mobile-quote:hover {
        background: #aa0000 !important;
      }

      .hcx-mobile-panel .hcx-mobile-quote::before {
        display: none !important;
      }

      /* ── MOBILE BOTTOM BAR ── */
      .hcx-mobile-bottom-bar {
        display: none;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background: #fff;
        border-top: 2px solid #cc0000;
        z-index: 999;
        box-shadow: 0 -4px 16px rgba(0,0,0,0.12);
      }

      .hcx-mobile-bottom-bar ul {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
      }

      .hcx-mobile-bottom-bar ul li {
        flex: 1;
      }

      .hcx-mobile-bottom-bar ul li a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 8px 4px;
        text-decoration: none;
        color: #888;
        font-size: 10px;
        font-weight: 500;
        gap: 3px;
        transition: color 0.2s;
      }

      .hcx-mobile-bottom-bar ul li a svg {
        width: 20px;
        height: 20px;
        stroke: currentColor;
        fill: none;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
      }

      .hcx-mobile-bottom-bar ul li a.hcx-active,
      .hcx-mobile-bottom-bar ul li a:hover {
        color: #cc0000;
      }

      /* ── RESPONSIVE BREAKPOINTS ── */

      /* Tablet / small desktop */
      @media (max-width: 1100px) {
        .hcx-vendor-btn { display: none; }
        .hcx-nav-area ul li a { padding: 0 12px; font-size: 13px; }
      }

      /* Mobile and tablet portrait */
      @media (max-width: 992px) {
        .hcx-nav-area,
        .hcx-nav-right,
        .hcx-diagonal { display: none; }
        .hcx-mobile-toggle { display: flex; }
        .hcx-top-row { padding: 6px 16px; }
        .hcx-logo { min-width: unset; padding: 10px 16px; }
        .hcx-mobile-bottom-bar { display: block; }
        /* Add bottom padding to body for bottom bar */
        body { padding-bottom: 62px !important; }
      }

      /* Small mobile */
      @media (max-width: 600px) {
        .hcx-top-right > a { display: none; }
        .hcx-top-left a:first-child { display: none; }
        .hcx-redbox { display: none; }
        .hcx-top-row { padding: 5px 12px; }
        .hcx-logo { padding: 8px 12px; }
        .hcx-logo-name { font-size: 18px; }
        .hcx-logo-tag { display: none; }
        .hcx-logo-icon { width: 36px; height: 36px; }
        .hcx-mobile-toggle { margin-right: 8px; }
      }

      /* Very small mobile */
      @media (max-width: 380px) {
        .hcx-city-select span { display: none; }
        .hcx-socials { display: none; }
      }
    </style>

    <nav class="hcx-navbar" id="hcxNavbar">

      <!-- TOP ROW -->
      <div class="hcx-top-row">
        <div class="hcx-top-left">
          <a href="contact.html">Get a Free Quote</a>
          <div class="hcx-city-select">
            <span>Select Service</span>
            <svg viewBox="0 0 12 12"><polyline points="2,4 6,8 10,4"/></svg>
          </div>
        </div>
        <div class="hcx-top-right">
          <a href="contact.html">Hire a Developer</a>
          <div class="hcx-socials">
            <!-- Facebook -->
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <!-- Twitter -->
            <a href="#" aria-label="Twitter">
              <svg viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
            </a>
            <!-- YouTube -->
            <a href="#" aria-label="YouTube">
              <svg viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#cc0000"/></svg>
            </a>
            <!-- Instagram -->
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke-width="3"/></svg>
            </a>
          </div>
          <div class="hcx-redbox"></div>
        </div>
      </div>

      <!-- BOTTOM ROW -->
      <div class="hcx-bottom-row">

        <!-- Logo -->
        <a class="hcx-logo" href="index.html">
          <div class="hcx-logo-icon">
            <svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
          </div>
          <div class="hcx-logo-texts">
            <span class="hcx-logo-name">High<span>CodeX</span></span>
            <span class="hcx-logo-tag">India's Best Digital Agency</span>
          </div>
        </a>

        <!-- Diagonal cut -->
        <div class="hcx-diagonal"></div>

        <!-- Nav Links -->
        <div class="hcx-nav-area">
          <ul>
            <li><a href="index.html" class="hcx-nav-link" data-page="index.html">Home</a></li>
            <li><a href="about.html" class="hcx-nav-link" data-page="about.html">About</a></li>
            <li><a href="services.html" class="hcx-nav-link" data-page="services.html">Services</a></li>
            <li><a href="portfolio.html" class="hcx-nav-link" data-page="portfolio.html">Portfolio</a></li>
            <li><a href="contact.html" class="hcx-nav-link" data-page="contact.html">Contact</a></li>
          </ul>
        </div>

        <!-- Right Buttons -->
        <div class="hcx-nav-right">
          <button class="hcx-vendor-btn">
            <svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            Are You a Vendor?
          </button>
          <a href="contact.html" class="hcx-get-quote">
            Get Quote
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>
          </a>
        </div>

        <!-- Mobile toggle -->
        <button class="hcx-mobile-toggle" id="hcxMobileToggle" aria-label="Toggle menu">
          <svg viewBox="0 0 24 24" id="hcxMenuIcon">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>

      </div>

      <!-- Mobile Dropdown Panel -->
      <div class="hcx-mobile-panel" id="hcxMobilePanel">
        <a href="index.html" class="hcx-mob-link" data-page="index.html">Home</a>
        <a href="about.html" class="hcx-mob-link" data-page="about.html">About</a>
        <a href="services.html" class="hcx-mob-link" data-page="services.html">Services</a>
        <a href="portfolio.html" class="hcx-mob-link" data-page="portfolio.html">Portfolio</a>
        <a href="contact.html" class="hcx-mob-link" data-page="contact.html">Contact</a>
        <a href="contact.html" class="hcx-mobile-quote">Get a Free Quote →</a>
      </div>

    </nav>

    <!-- Mobile Bottom Navigation Bar -->
    <div class="hcx-mobile-bottom-bar" id="hcxBottomBar">
      <ul>
        <li>
          <a href="index.html" class="hcx-bottom-link" data-page="index.html">
            <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            Home
          </a>
        </li>
        <li>
          <a href="about.html" class="hcx-bottom-link" data-page="about.html">
            <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            About
          </a>
        </li>
        <li>
          <a href="services.html" class="hcx-bottom-link" data-page="services.html">
            <svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            Services
          </a>
        </li>
        <li>
          <a href="portfolio.html" class="hcx-bottom-link" data-page="portfolio.html">
            <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            Portfolio
          </a>
        </li>
        <li>
          <a href="contact.html" class="hcx-bottom-link" data-page="contact.html">
            <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 5.93 5.93l1.84-1.84a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Contact
          </a>
        </li>
      </ul>
    </div>
  `;

  // ----- Footer HTML -----
  const footerHTML = `
    <style>
      .hcx-footer {
        background: #1a0e0e;
        color: #b59e7c;
        padding: 50px 0 30px;
        margin-top: 0;
        font-family: 'Poppins', sans-serif;
      }

      .hcx-footer-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 32px;
      }

      .hcx-footer-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 40px;
        margin-bottom: 48px;
      }

      .hcx-footer-brand h3 {
        font-family: 'Cormorant Garamond', serif;
        font-size: 26px;
        color: #d4af37;
      }

      .hcx-footer-brand h3 span { color: white; }

      .hcx-footer-brand p {
        margin-top: 12px;
        font-size: 14px;
        line-height: 1.7;
      }

      .hcx-footer-col h4 {
        color: white;
        margin-bottom: 12px;
        font-size: 15px;
      }

      .hcx-footer-col ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .hcx-footer-col ul li a {
        color: #b59e7c;
        text-decoration: none;
        font-size: 14px;
        transition: color 0.2s;
      }

      .hcx-footer-col ul li a:hover { color: #d4af37; }

      .hcx-footer-col ul li {
        font-size: 14px;
      }

      .hcx-footer-bottom {
        border-top: 1px solid #3e2b2b;
        padding-top: 24px;
        text-align: center;
        font-size: 13px;
      }

      /* Footer responsive */
      @media (max-width: 900px) {
        .hcx-footer-grid {
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
        }
      }

      @media (max-width: 560px) {
        .hcx-footer-container {
          padding: 0 20px;
        }
        .hcx-footer-grid {
          grid-template-columns: 1fr;
          gap: 24px;
          margin-bottom: 32px;
        }
        .hcx-footer {
          padding: 36px 0 24px;
        }
      }
    </style>

    <footer class="hcx-footer">
      <div class="hcx-footer-container">
        <div class="hcx-footer-grid">
          <div class="hcx-footer-brand">
            <h3>High<span>CodeX</span></h3>
            <p>Affordable web solutions, on-time delivery, and innovation across South India.</p>
          </div>
          <div class="hcx-footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="portfolio.html">Portfolio</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
          <div class="hcx-footer-col">
            <h4>Tech Stack</h4>
            <ul>
              <li>React / Python / Django</li>
              <li>Laravel / PHP / MySQL</li>
              <li>React Native / Flutter</li>
            </ul>
          </div>
          <div class="hcx-footer-col">
            <h4>Contact</h4>
            <ul>
              <li>📱 +91 7868946689</li>
              <li>✉️ highcodextech@gmail.com</li>
              <li>📍 Chennai, Tamil Nadu</li>
            </ul>
          </div>
        </div>
        <div class="hcx-footer-bottom">
          © 2026 HighCodeX Technologies — Code that converts. All rights reserved.
        </div>
      </div>
    </footer>
  `;

  // ── Inject HTML ──
  headerContainer.innerHTML = headerHTML;
  footerContainer.innerHTML = footerHTML;

  // ── Add body top padding so content isn't hidden under fixed navbar ──
  requestAnimationFrame(() => {
    const navbar = document.getElementById('hcxNavbar');
    if (navbar) {
      document.body.style.paddingTop = navbar.offsetHeight + 'px';
    }
    window.addEventListener('resize', () => {
      if (navbar) document.body.style.paddingTop = navbar.offsetHeight + 'px';
    });
  });

  // ── Mobile menu toggle (hamburger ↔ X) ──
  const toggleBtn = document.getElementById('hcxMobileToggle');
  const mobilePanel = document.getElementById('hcxMobilePanel');
  const menuIcon = document.getElementById('hcxMenuIcon');

  if (toggleBtn && mobilePanel) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = mobilePanel.classList.toggle('open');

      // Animate hamburger → X
      if (isOpen) {
        menuIcon.innerHTML = `
          <line x1="4" y1="4" x2="20" y2="20"/>
          <line x1="20" y1="4" x2="4" y2="20"/>
        `;
      } else {
        menuIcon.innerHTML = `
          <line x1="3" y1="6" x2="21" y2="6"/>
          <line x1="3" y1="12" x2="21" y2="12"/>
          <line x1="3" y1="18" x2="21" y2="18"/>
        `;
      }
    });

    // Close menu when any link is clicked
    mobilePanel.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobilePanel.classList.remove('open');
        menuIcon.innerHTML = `
          <line x1="3" y1="6" x2="21" y2="6"/>
          <line x1="3" y1="12" x2="21" y2="12"/>
          <line x1="3" y1="18" x2="21" y2="18"/>
        `;
      });
    });
  }

  // ── Active nav link highlight (desktop + mobile panel + bottom bar) ──
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.hcx-nav-link').forEach(link => {
    if (link.getAttribute('data-page') === currentPage) {
      link.classList.add('hcx-active');
    }
  });

  document.querySelectorAll('.hcx-bottom-link').forEach(link => {
    if (link.getAttribute('data-page') === currentPage) {
      link.classList.add('hcx-active');
    }
  });

})();