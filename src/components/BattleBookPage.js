import React from 'react';
import './BattleBookPage.css';
import headImage from '../img/head.png';

function BattleBookPage() {
  return (
    <section id="container" className="battlebookpage">
      <div className="header">
        <img src={headImage} alt="Header" className="header-image" />
      </div>
      <div className="content">
        {/* 여기에 콘텐츠를 추가합니다 */}
      </div>
    </section>
  );
}

export default BattleBookPage;
