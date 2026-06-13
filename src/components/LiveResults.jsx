import React from 'react';

export default function LiveResults() {
  return (
    <section className="top-charts-section">
      <div className="section-header">
        <h2 className="section-title">TODAY'S TOP CHARTS</h2>
      </div>
      <div className="charts-wrapper">
        <a href="https://satta-compny.com/record/desawer/2026" className="chart-card">
          <h3 className="chart-name">DESAWER</h3>
          <p className="chart-time">(05:00 AM)</p>
          <div className="chart-results">
            <span className="previous-result">{'{ 52 }'}</span>🔜 <span className="current-result">{'{ 71 }'}</span>
          </div>
        </a>
      </div>
    </section>
  );
}
