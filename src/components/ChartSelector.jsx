import React, { useState } from 'react';

export default function ChartSelector() {
  const [game, setGame] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (game && year) {
      window.location.href = `https://satta-compny.com/record/${game.replace(/ /g, "-")}/${year}`;
    }
  };

  return (
    <section className="chart-selector-section">
      <div className="section-header">
        <h2 className="section-title">YEARLY RESULT CHART</h2>
      </div>
      <form className="chart-selector-form" onSubmit={handleSubmit}>
        <select className="form-select" value={game} onChange={e => setGame(e.target.value)} required>
          <option value="">Select Game</option>
          <option value="desawer">DESAWER</option>
          <option value="faridabad">FARIDABAD</option>
          <option value="ghaziabad">GHAZIABAD</option>
          <option value="gali">GALI</option>
          <option value="delhi bazar">DELHI BAZAR</option>
          <option value="shree ganesh">SHREE GANESH</option>
          <option value="jaipur day">JAIPUR DAY</option>
          <option value="punjab mail">PUNJAB MAIL</option>
          <option value="sikandrabad">SIKANDRABAD</option>
          <option value="shree sai">SHREE SAI</option>
          <option value="manali ">MANALI </option>
          <option value="gali disawar mix">GALI DISAWAR MIX</option>
        </select>
        <select className="form-select" value={year} onChange={e => setYear(e.target.value)} required>
          <option value="">Select Year</option>
          <option value="2026">2026</option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>
        <button type="submit" className="form-button">Check Results</button>
      </form>
    </section>
  );
}
