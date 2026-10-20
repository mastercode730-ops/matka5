import React from "react";
import { SITE_NAME, SITE_DOMAIN } from "../constants";

export default function Disclaimer({ onBack }) {
  return (
    <div className="legal-container">
      <div className="legal-header">
        <button type="button" onClick={onBack} className="legal-back-btn">
          ← Back to Home
        </button>
        <h1 className="legal-title">Disclaimer</h1>
        <p className="legal-subtitle">Important Legal & Regulatory Notice</p>
      </div>

      <div className="legal-content">
        <div className="disclaimer-alert-box">
          <div className="alert-badge">⚠️ CAUTION & NOTICE</div>
          <p>
            <strong>{SITE_NAME}</strong> ({SITE_DOMAIN}) is an informational and entertainment
            portal. We DO NOT conduct, facilitate, or promote betting, gambling, lotteries, or
            any illegal money operations.
          </p>
        </div>

        <section className="legal-section">
          <h2>1. Informational & Educational Purposes Only</h2>
          <p>
            All names, trademarks, market names (such as Desawar, Gali, Faridabad, Ghaziabad,
            Kalyan, Mumbai, etc.), historical tables, and daily records published on this website
            are aggregated from publicly accessible feeds for reference, statistical study, and
            news dissemination only.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Non-Affiliation & Anti-Gambling Stance</h2>
          <p>
            We have no direct association, partnership, or sponsorship with any illegal gambling
            syndicate, bookmakers, or matka operators. We strictly oppose unlawful gambling
            practices. Any references to market games are intended solely as news reporting and
            historical archival records.
          </p>
        </section>

        <section className="legal-section">
          <h2>3. Legal Compliance & Jurisdiction Warnings</h2>
          <p>
            Gambling and betting laws differ widely across jurisdictions and states. In many regions
            and territories (including various states in India under the Public Gambling Act, 1867
            and respective state statutes), betting and gambling are strictly illegal and punishable
            offenses under the law.
          </p>
          <p>
            Users are solely responsible for ensuring that viewing or researching this content
            does not violate any federal, regional, or local statutory laws. If you reside in a
            jurisdiction where accessing or viewing matka/satta results is illegal, you are
            instructed to exit this website immediately.
          </p>
        </section>

        <section className="legal-section">
          <h2>4. No Financial Advice or Guarantees</h2>
          <p>
            Any numbers, guessing formulas, jodi/haruf charts, or tips shared on this site or
            associated third-party links are strictly speculative and algorithmic estimates.
            We make zero representation or guarantee regarding accuracy, predictability, or
            financial outcomes. Never risk money on speculative predictions.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Absolute Limitation of Financial Liability</h2>
          <p>
            Under no circumstances will {SITE_NAME}, its webmasters, authors, or hosting providers
            be held responsible or liable for any personal monetary loss, legal penalties, or
            damages incurred by individuals through third-party contacts, external phone numbers,
            or real-world betting activities. Users assume 100% full individual responsibility.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Third-Party Advertisements & External Contacts</h2>
          <p>
            Any promotional advertisements, banners, or WhatsApp contact buttons visible on this
            platform belong to independent third parties. We do not inspect, audit, or guarantee
            their claims or integrity. Any transactions entered into with such entities are solely
            at your own risk and peril.
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
