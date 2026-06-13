import React from 'react';

export default function FloatingButtons() {
  const handleRefresh = () => window.location.reload();

  return (
    <>
      <a href="#!" onClick={handleRefresh} className="floating-refresh" title="Refresh page">
        Refresh
      </a>
      <a href="https://wa.me/917589045547" className="floating-whatsapp" target="_blank" rel="noopener noreferrer" title="Chat on WhatsApp">
        WhatsApp
      </a>
    </>
  );
}
