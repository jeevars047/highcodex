// HighCodeX - Shared Navbar Component
// Usage: <script src="navbar.js"></script> — add this in <body> tag-la

(function () {
  const currentPage = window.location.pathname.split('/').pop() || 'home.html';

  const navLinks = [
    { href: 'home.html',      label: 'Home',      icon: '🏠' },
    { href: 'shop.html',      label: 'Shop',       icon: '🛍️' },
    { href: 'product.html',   label: 'Products',   icon: '📦' },
    { href: 'cart.html',      label: 'Cart',       icon: '🛒' },
    { href: 'whishlist.html', label: 'Wishlist',   icon: '❤️' },
    { href: 'orders.html',    label: 'Orders',     icon: '📋' },
    { href: 'about.html',     label: 'About',      icon: '💡' },
    { href: 'address.html',   label: 'Address',    icon: '📍' },
    { href: 'login.html',     label: 'Login',      icon: '🔐' },
    { href: 'register.html',  label: 'Register',   icon: '✍️' },
    { href: 'checkout.html',  label: 'Checkout',   icon: '💳' },
  ];

  const style = document.createElement('style');
  style.textContent = `
    #hcx-navbar {
      position: sticky;
      top: 0;
      z-index: 9999;
      background: #1A1208;
      font-family: 'Jost', 'Segoe UI', sans-serif;
      box-shadow: 0 2px 20px rgba(0,0,0,0.4);
    }
    #hcx-navbar .hcx-inner {
      max-width: 1240px;
      margin: 0 auto;
      padding: 0 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 60px;
    }
    #hcx-navbar .hcx-logo {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 22px;
      font-weight: 900;
      color: #B8860B;
      text-decoration: none;
      letter-spacing: 1px;
      flex-shrink: 0;
    }
    #hcx-navbar .hcx-logo span { color: #fff; }
    #hcx-navbar .hcx-links {
      display: flex;
      align-items: center;
      gap: 2px;
      list-style: none;
      margin: 0;
      padding: 0;
      overflow-x: auto;
      scrollbar-width: none;
    }
    #hcx-navbar .hcx-links::-webkit-scrollbar { display: none; }
    #hcx-navbar .hcx-links a {
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 8px 13px;
      font-size: 13px;
      font-weight: 500;
      color: #ccc;
      text-decoration: none;
      border-radius: 6px;
      white-space: nowrap;
      transition: all 0.2s;
      border-bottom: 2px solid transparent;
    }
    #hcx-navbar .hcx-links a:hover {
      color: #B8860B;
      background: rgba(184,134,11,0.1);
    }
    #hcx-navbar .hcx-links a.active {
      color: #B8860B;
      background: rgba(184,134,11,0.15);
      border-bottom-color: #B8860B;
      font-weight: 600;
    }
    #hcx-navbar .hcx-icon { font-size: 15px; }

    /* Mobile hamburger */
    #hcx-hamburger {
      display: none;
      background: none;
      border: 1.5px solid #B8860B;
      border-radius: 6px;
      color: #B8860B;
      font-size: 20px;
      cursor: pointer;
      padding: 4px 10px;
      line-height: 1;
    }
    #hcx-mobile-menu {
      display: none;
      background: #1A1208;
      border-top: 1px solid #2a2010;
      padding: 0.5rem 1.5rem 1rem;
      flex-wrap: wrap;
      gap: 6px;
    }
    #hcx-mobile-menu a {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 8px 14px;
      font-size: 13px;
      font-weight: 500;
      color: #ccc;
      text-decoration: none;
      border-radius: 6px;
      border: 1px solid #2a2010;
      transition: all 0.2s;
    }
    #hcx-mobile-menu a:hover,
    #hcx-mobile-menu a.active {
      color: #B8860B;
      border-color: #B8860B;
      background: rgba(184,134,11,0.1);
    }
    @media (max-width: 768px) {
      #hcx-navbar .hcx-links { display: none; }
      #hcx-hamburger { display: block; }
      #hcx-mobile-menu.open { display: flex; }
    }
  `;
  document.head.appendChild(style);

  // Build navbar HTML
  const nav = document.createElement('nav');
  nav.id = 'hcx-navbar';

  const linksHTML = navLinks.map(link => {
    const isActive = currentPage === link.href ? 'active' : '';
    return `<li><a href="${link.href}" class="${isActive}"><span class="hcx-icon">${link.icon}</span>${link.label}</a></li>`;
  }).join('');

  const mobileLinksHTML = navLinks.map(link => {
    const isActive = currentPage === link.href ? 'active' : '';
    return `<a href="${link.href}" class="${isActive}">${link.icon} ${link.label}</a>`;
  }).join('');

  nav.innerHTML = `
    <div class="hcx-inner">
      <a href="home.html" class="hcx-logo">High<span>Code</span>X</a>
      <ul class="hcx-links">${linksHTML}</ul>
      <button id="hcx-hamburger" onclick="document.getElementById('hcx-mobile-menu').classList.toggle('open')">☰</button>
    </div>
    <div id="hcx-mobile-menu">${mobileLinksHTML}</div>
  `;

  // Insert navbar at the very top of body
  document.body.insertBefore(nav, document.body.firstChild);
})();
