import React, { useState } from 'react';
import './CardDetail.css';

function CardDetail({ card }) {
  const [level, setLevel] = useState(1);

  const increaseLevel = () => {
    if (level < 7) {
      setLevel(level + 1);
    }
  };

  const decreaseLevel = () => {
    if (level > 1) {
      setLevel(level - 1);
    }
  };

  return (
    <div className="card-detail-container">
      <div className="card-detail">
        <div className="card-image-full">
          <img src={process.env.PUBLIC_URL + '/img/card_full/SpellCardIllustGUI' + card.id + '.png'} alt={card.name} />
          <div className="card-name-overlay">{card.name}</div> {/* 카드 이름 오버레이 */}
          <div className="card-level-control">
            <button onClick={decreaseLevel} disabled={level === 1}>-</button>
            <span>{level}</span>
            <button onClick={increaseLevel} disabled={level === 7}>+</button>
          </div>
        </div>
        <div className="card-description">
          <div className="description-top">
            <h2>{card.name}</h2>
          </div>
          <div className="description-middle">
            <p>선택 가능한 발동 시점: {card.activationTiming}</p>
            <p>선택 가능한 발동 대상: {card.activationTarget}</p>
          </div>
          <div className="description-bottom">
            <p>방어력이 감소됩니다.</p>
            <p>방어력: {card.defenseReduction}</p>
            <p>받는 피해량이 증가됩니다.</p>
            <p>받는 피해량: {card.increasedDamage}</p>
            <p>나이트메어 유지시간: {card.nightmareDuration}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
