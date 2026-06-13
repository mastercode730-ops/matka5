import React from 'react';

export default function Header() {
  return (
    <header className="header-container">
      <nav className="header-nav">
        <div className="nav-wrapper">
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="/" className="nav-link ">SATTA HOME</a>
            </li>
            <li className="nav-item">
              <a href="/chart" className="nav-link ">SATTA CHART</a>
            </li>
            <li className="nav-item">
              <a href="#records" className="nav-link ">RECORDS</a>
            </li>
          </ul>
        </div>
        <div className="nav-brand">
          <h1 className="site-title"><a href="/" className="brand-link">Satta Company Satta King</a></h1>
        </div>
      </nav>
    </header>
  );
}
