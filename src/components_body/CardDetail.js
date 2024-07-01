import React, { useState } from 'react';
import './CardDetail.css';

const fillEmptyValues = (values) => {
  let lastValue = '';
  return values.map((value) => {
    if (value === '') {
      return lastValue;
    }
    lastValue = value;
    return value;
  });
};

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

  const renderActivationTiming = () => {
    const filledTimings = fillEmptyValues(card.activationTiming);
    const timings = filledTimings[level - 1].split(',');
    return timings.map((timing, index) => (
      <p key={index}>{timing}턴 시작 전</p>
    ));
  };

  const renderActivationTarget = () => {
    const filledTargets = fillEmptyValues(card.activationTarget);
    const targets = filledTargets[level - 1].split(',').filter(target => target !== '');
    return targets.map((target, index) => (
      <p key={index}>{target}</p>
    ));
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
            <img src={`${process.env.PUBLIC_URL}/img/etc/spell_tjfaud.png`} alt="Activation Icon" className="activation-icon" />
            <h3 className="title">선택 가능한 발동 시점</h3>
            {renderActivationTiming()}
          </div>
          <div className="description-middle">
            <img src={`${process.env.PUBLIC_URL}/img/etc/spell_tjfaud.png`} alt="Activation Icon" className="activation-icon" />
            <h3 className="title">선택 가능한 발동 대상:</h3>
            {renderActivationTarget()}
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
