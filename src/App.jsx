import React from 'react';
import Header from './components/Header';
import ClockBanner from './components/ClockBanner';
import LiveResults from './components/LiveResults';
import ResultsTable from './components/ResultsTable';
import ChartSelector from './components/ChartSelector';
import MonthlyChart from './components/MonthlyChart';
import SEOContent from './components/SEOContent';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />
      <ClockBanner />
      <LiveResults />
      <section className="posts-section" id="main-content">
      </section>
      <section className="ads-section">
      </section>
      <ResultsTable />
      <ChartSelector />
      <MonthlyChart />
      <SEOContent />
      <Footer />
      <FloatingButtons />
      <div style={{ textAlign: 'center', fontSize: '11px', color: '#888', marginTop: '10px', marginBottom: '10px' }}>
        ⚡Last Updated: 13 Jun 2026
      </div>
    </>
  );
}

export default App;
