import React from "react";
import { SITE_NAME, SITE_DOMAIN } from "../constants";

export default function TermsConditions({ onBack }) {
  return (
    <div className="legal-container">
      <div className="legal-header">
        <button type="button" onClick={onBack} className="legal-back-btn">
          ← Back to Home
        </button>
        <h1 className="legal-title">Terms & Conditions</h1>
        <p className="legal-subtitle">Effective Date: January 2026</p>
      </div>

      <div className="legal-content">
        <section className="legal-section">
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing or browsing <strong>{SITE_NAME}</strong> ({SITE_DOMAIN}), you
            confirm that you have read, understood, and agreed to be bound by these Terms and
            Conditions. If you disagree with any part of these terms, you must immediately
            discontinue using this website.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Informational & Historical Content Only</h2>
          <p>
            This website provides daily market results, historical number records, and statistical
            charts collected from public sources purely for informational, archival, and reference
            purposes. <strong>{SITE_NAME}</strong> does not operate, host, organize, or manage
            any betting, gambling, lotteries, or real-money gaming activities.
          </p>
        </section>

        <section className="legal-section">
          <h2>3. Age Restriction & Jurisdiction Eligibility</h2>
          <p>
            You must be at least <strong>18 years of age</strong> (or the age of legal majority
            in your jurisdiction) to access this website. You are strictly responsible for complying
            with all federal, state, and local laws regarding gaming and betting in your territory.
            If viewing or referencing market results is unlawful where you reside, you are strictly
            prohibited from accessing this site.
          </p>
        </section>

        <section className="legal-section">
          <h2>4. User Conduct & Acceptable Use</h2>
          <p>While using our website, you agree not to:</p>
          <ul>
            <li>Scrape, duplicate, or systematically harvest data without prior written permission.</li>
            <li>Attempt to compromise security, disrupt server operations, or inject malicious code.</li>
            <li>Use any content for unlawful, fraudulent, or deceptive purposes.</li>
            <li>Impersonate website administrators or distribute false representations.</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>5. Third-Party Websites & External Services</h2>
          <p>
            The website may display links, promotional banners, or third-party contact coordinates
            (including WhatsApp channels or partner portals). These third-party entities are operated
            independently. We do not endorse, guarantee, or assume liability for interactions,
            transactions, or representations made by external parties.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Intellectual Property</h2>
          <p>
            The website design, branding, layout, software code, and curated presentation are the
            property of {SITE_NAME} and are protected under applicable copyright and intellectual
            property regulations. Unauthorized copying or redistribution is strictly prohibited.
          </p>
        </section>

        <section className="legal-section">
          <h2>7. Disclaimer of Warranties & Limitation of Liability</h2>
          <p>
            All information on this site is provided on an <em>"AS IS"</em> and{" "}
            <em>"AS AVAILABLE"</em> basis without warranty of any kind. Under no circumstances
            shall {SITE_NAME}, its owners, or affiliates be liable for any direct, indirect,
            incidental, or consequential damages resulting from reliance on the data provided.
          </p>
        </section>

        <section className="legal-section">
          <h2>8. Governing Law & Amendments</h2>
          <p>
            These terms are governed by the relevant legal principles. We hold the discretion to
            modify or update these terms at any given time without prior warning. Your continued
            use of the platform constitutes acceptance of all amended terms.
          </p>
        </section>
      </div>

      <div className="legal-footer-nav">
        <button type="button" onClick={onBack} className="mumbai-btn">
          ← Return to Live Results
        </button>
      </div>
    </div>
  );
}
