import React from 'react';

export default function Footer() {
  return (
    <footer className="footer-section">
      <nav className="footer-nav">
        <ul className="footer-links">
          <li><a href="/privacy-policy">Privacy Policy</a></li>| 
          <li><a href="/terms-conditions">Terms & Conditions</a></li>| 
          <li><a href="/sitemap.xml">Sitemap</a></li>
        </ul>
      </nav>
      <div className="footer-copyright">
        <p>&copy; 2026 Satta Company. All Rights Reserved.</p>
      </div>
      <div className="footer-disclaimer">
        <p><strong>DISCLAIMER:</strong> Satta Company is an informational website that provides market results, charts, records, and related updates for educational and reference purposes only. We do not promote, encourage, organize, or facilitate any form of gambling or betting activity. Users are responsible for complying with the laws and regulations applicable in their jurisdiction. If any activity related to betting or gambling is restricted or prohibited in your area, please refrain from participating. Satta Company shall not be held liable for any losses, damages, or consequences arising from the use of information available on this website.</p>
      </div>
    </footer>
  );
}
