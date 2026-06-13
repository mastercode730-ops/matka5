import React from 'react';

const games = [
  { name: 'JAIPUR DAY', time: '01:30 PM', prev: '67', curr: 'Wait', slug: 'jaipur-day' },
  { name: 'PUNJAB MAIL', time: '02:00 PM', prev: '63', curr: 'Wait', slug: 'punjab-mail' },
  { name: 'SHREE SAI', time: '02:40 PM', prev: '38', curr: 'Wait', slug: 'shree-sai' },
  { name: 'DELHI BAZAR', time: '03:00 PM', prev: '19', curr: 'Wait', slug: 'delhi-bazar' },
  { name: 'SHREE GANESH', time: '04:30 PM', prev: '49', curr: 'Wait', slug: 'shree-ganesh' },
  { name: 'SIKANDRABAD', time: '05:45 PM', prev: '37', curr: 'Wait', slug: 'sikandrabad' },
  { name: 'FARIDABAD', time: '06:00 PM', prev: '79', curr: 'Wait', slug: 'faridabad' },
  { name: 'MANALI', time: '08:10 PM', prev: '42', curr: 'Wait', slug: 'manali-' },
  { name: 'GALI DISAWAR MIX', time: '08:15 PM', prev: '15', curr: 'Wait', slug: 'gali-disawar-mix' },
  { name: 'GHAZIABAD', time: '09:10 PM', prev: '20', curr: 'Wait', slug: 'ghaziabad' },
  { name: 'GALI', time: '11:00 PM', prev: '59', curr: 'Wait', slug: 'gali' },
];

export default function ResultsTable() {
  return (
    <main className="results-tables-section">
      <section className="results-table-wrapper">
        <div className="table-container">
          <table className="results-table">
            <thead>
              <tr>
                <th className="game-name-header">सट्टा का नाम</th>
                <th className="previous-header">कल आया था</th>
                <th className="current-header">आज का रिज़ल्ट</th>
              </tr>
            </thead>
            <tbody>
              {games.map((game, idx) => (
                <tr key={idx}>
                  <td className="game-cell">
                    <a href={`https://satta-compny.com/record/${game.slug}/2026`} className="game-link">{game.name}</a>
                    <div className="game-time">{game.time}</div>
                  </td>
                  <td className="previous-cell">
                    <span className="number-display">{game.prev}</span>
                  </td>
                  <td className="current-cell">
                    <span className="number-display">{game.curr}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
