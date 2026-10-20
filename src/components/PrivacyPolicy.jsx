import React from "react";
import { SITE_NAME, SITE_DOMAIN } from "../constants";

export default function PrivacyPolicy({ onBack }) {
  return (
    <div className="legal-container">
      <div className="legal-header">
        <button type="button" onClick={onBack} className="legal-back-btn">
          ← Back to Home
        </button>
        <h1 className="legal-title">Privacy Policy</h1>
        <p className="legal-subtitle">Last Updated: January 2026</p>
      </div>

      <div className="legal-content">
        <section className="legal-section">
          <h2>1. Introduction</h2>
          <p>
            Welcome to <strong>{SITE_NAME}</strong> ({SITE_DOMAIN}). We respect your
            privacy and are committed to protecting any personal information you may share
            with us. This Privacy Policy describes what information we collect, how it is used,
            and your rights regarding your data when accessing our website.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Information We Collect</h2>
          <p>We may collect information in the following ways:</p>
          <ul>
            <li>
              <strong>Non-Personal & Technical Data:</strong> Browser type, operating system, IP
              address, access times, pages viewed, and device parameters collected automatically
              via server logs.
            </li>
            <li>
              <strong>Cookies & Analytics:</strong> Standard web cookies and local storage tokens to
              remember preferences and analyze traffic patterns.
            </li>
            <li>
              <strong>Voluntary Communications:</strong> If you reach out to our WhatsApp or email
              support, we receive the contact details and messages you submit voluntarily.
            </li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>3. How We Use Information</h2>
          <p>The information collected is used solely to:</p>
          <ul>
            <li>Maintain, operate, and optimize the speed and stability of our website.</li>
            <li>Monitor site performance, server load, and detect malicious or fraudulent traffic.</li>
            <li>Respond to technical inquiries, complaints, and user support messages.</li>
            <li>Comply with valid legal obligations and regulatory standards.</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>4. Cookies & Third-Party Advertising</h2>
          <p>
            We may use cookies or web beacons to display relevant updates and advertisements.
            Third-party advertising partners (such as Google or advertising exchanges) may use
            cookies to serve ads based on your visit to this and other websites on the Internet.
            You can configure your browser to reject cookies or notify you before cookies are set.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Third-Party Links & External Platforms</h2>
          <p>
            Our website contains links to external websites, chat applications (such as WhatsApp),
            and third-party portals. We do not control and are not responsible for the privacy
            practices, policies, or content of any external third-party entities. Please inspect
            the individual privacy policies of external sites you choose to visit.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Data Protection & Security</h2>
          <p>
            We apply reasonable commercial technical security measures to prevent unauthorized
            access, disclosure, modification, or destruction of technical data. However, please
            note that no method of transmission over the Internet or electronic storage is
            100% impenetrable.
          </p>
        </section>

        <section className="legal-section">
          <h2>7. Children's Privacy</h2>
          <p>
            This website is strictly intended for individuals who are 18 years of age or older.
            We do not knowingly collect or solicit personal information from minors. If you believe
            a minor has provided data on our site, please contact us immediately to remove it.
          </p>
        </section>

        <section className="legal-section">
          <h2>8. Updates to this Policy</h2>
          <p>
            We reserve the right to revise this Privacy Policy at any time. Changes will be posted
            directly on this page with an updated revision date. Continued usage of our website
            signifies your acceptance of any revisions.
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
