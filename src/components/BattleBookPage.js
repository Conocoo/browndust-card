import React from 'react';
import './BattleBookPage.css';

function BattleBookPage() {
  return (
    <section id="container" className="battlebookpage">
      <div className="header">
      <img src={process.env.PUBLIC_URL + '/img/head.png'} alt="Header" className="header-image" />
      </div>
    </section>
  );
}

export default BattleBookPage;
