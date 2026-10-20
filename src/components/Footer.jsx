import React from "react";
import { SITE_NAME, SITE_DOMAIN } from "../constants";

export default function Footer({ onNavigate }) {
  const handleNav = (e, page) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <footer className="footer-mumbai">
      <div className="footer-nav-links">
        <button
          type="button"
          onClick={(e) => handleNav(e, "privacy")}
          className="footer-legal-link"
        >
          Privacy Policy
        </button>
        <span className="footer-sep">•</span>
        <button
          type="button"
          onClick={(e) => handleNav(e, "terms")}
          className="footer-legal-link"
        >
          Terms & Conditions
        </button>
        <span className="footer-sep">•</span>
        <button
          type="button"
          onClick={(e) => handleNav(e, "disclaimer")}
          className="footer-legal-link"
        >
          Disclaimer
        </button>
      </div>

      <p className="footer-copyright">
        {SITE_NAME} &bull; {SITE_DOMAIN} &bull; ALL RIGHTS RESERVED 2026
      </p>

      <div className="footer-disclaimer-box">
        <p>
          <strong>DISCLAIMER:</strong> {SITE_NAME} is an informational website that provides
          market results, charts, historical records, and daily updates for educational, statistical,
          and reference purposes only. We do not promote, encourage, organize, or facilitate
          gambling, betting, or illegal lottery activities. Please adhere strictly to the laws of your
          jurisdiction.
        </p>
      </div>
    </footer>
  );
}
