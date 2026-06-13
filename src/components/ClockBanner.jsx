import React, { useState, useEffect } from 'react';

export default function ClockBanner() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      let d = new Date();
      let h = d.getHours();
      setTime(`${d.toLocaleString('en-US', {month:'long'})} ${d.getDate()}, ${d.getFullYear()}, ${h % 12 || 12}:${(d.getMinutes() + '').padStart(2, '0')}:${(d.getSeconds() + '').padStart(2, '0')} ${h >= 12 ? 'PM' : 'AM'}`);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="clock-section">
        <div className="clock-display">
          <div className="clock-inner">
            <div id="clock-box" className="clock-time">{time || 'Satta Company Satta Result'}</div>
          </div>
          <center>
            <h2 className="clock-heading">FASTEST RESULTS OF SATTA COMPANY SATTA KING</h2>
          </center>
        </div>
      </section>

      <div className="announcement-bar">
        {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
        <marquee className="announcement-text" onMouseOver={(e) => e.target.stop()} onMouseOut={(e) => e.target.start()}>
          <span className="announcement-content">
            Welcome to Satta Company, your trusted destination for real-time satta updates and reliable results from popular markets such as Smart Satta, Shyam Satta, UP State Satta, Chandigarh Satta, and beyond.
          </span>
        </marquee>
      </div>

      <section className="cta-banners">
        <div className="cta-banner cta-primary">
          <div className="cta-content" style={{ color: 'white' }}>
            <strong className="cta-title">✈️🇫𝐀𝐒𝐓 🇰𝐇𝐀𝐁𝐀𝐑 ✈️</strong>
            <span className="cta-text">सबसे पहले रिजल्ट देख ने के लिए ज्वाइन ग्रुप</span><br />
            <a href="https://telegram.me/satta_update" className="cta-link" style={{ background: 'green' }}>📳JOIN GROUP NOW 📳</a>
          </div>
        </div>
      </section>
    </>
  );
}
