/**
 * Shared Footer Component for Koshti & Company Website (static)
 */
document.addEventListener('DOMContentLoaded', () => {
  renderFooter();
});

function renderFooter() {
  const footerContainer = document.getElementById('site-footer');
  if (!footerContainer) return;

  const config = (typeof getSiteConfig === 'function' ? getSiteConfig() : {}) || {};
  const firmName = config.firmName || 'Koshti & Company';
  const address = config.address || '';
  const city = config.city || '';
  const phones = config.phones || ['+91 98765 43210'];
  const email = config.email || 'contact@koshtico.in';
  const whatsapp = config.whatsapp || '919876543210';
  const hours = config.workingHours || 'Monday – Saturday: 10:00 AM – 7:00 PM';
  const year = new Date().getFullYear();
  const servicesList = config.servicesList || [];

  const phoneLinks = phones.map(p => {
    const clean = p.replace(/[\s\-\(\)]/g, '');
    return `<li><a href="tel:${clean}">${p}</a></li>`;
  }).join('');

  const serviceLinks = servicesList.slice(0, 6).map(s =>
    `<li><a href="services.html">${s}</a></li>`
  ).join('');

  footerContainer.innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-col">
            <h4>${firmName}</h4>
            <p style="color:#94A3B8; font-size:0.9rem; margin-bottom:1rem;">
              Chartered Accountants providing audit, taxation and corporate compliance services in Ahmedabad.
            </p>
            <p style="color:#94A3B8; font-size:0.85rem; line-height:1.6;">
              ${address}<br>${city}
            </p>
          </div>

          <div class="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About Us</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="updates.html">Updates</a></li>
              <li><a href="due-dates.html">Due Dates</a></li>
              <li><a href="contact.html">Contact Us</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Practice Areas</h4>
            <ul>
              ${serviceLinks}
            </ul>
          </div>

          <div class="footer-col">
            <h4>Contact</h4>
            <ul>
              ${phoneLinks}
              <li><a href="mailto:${email}">${email}</a></li>
            </ul>
            <p style="color:#94A3B8; font-size:0.85rem; margin-top:0.75rem;">${hours}</p>
            <a href="https://wa.me/${whatsapp}?text=${encodeURIComponent('Hello Koshti & Company, I have a professional enquiry.')}" target="_blank" rel="noopener" class="btn btn-primary btn-sm" style="background:#25D366; border:none; margin-top:0.75rem;">
              WhatsApp Us
            </a>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; ${year} ${firmName}. All rights reserved.</p>
          <p style="font-size:0.8rem; color:#64748B; margin-top:0.35rem;">ICAI Firm Registration as applicable. This website is for general information only.</p>
        </div>
      </div>
    </footer>
  `;
}
