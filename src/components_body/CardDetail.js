import React from 'react';
import './CardDetail.css';
import PropTypes from 'prop-types';

function CardDetail({ card }) {
  const renderActivationTiming = () => {
    return card.activationTiming
      .split('\n')
      .map((line, index) => <p key={index}>{line} 턴 시작 전</p>);
  };

  const renderActivationTarget = () => {
    return card.activationTarget
      .split('\n')
      .map((line, index) => <p key={index}>{line}</p>);
  };

  const renderDescription = () => {
    return card.description
      .split('\n')
      .map((line, index) => <p key={index}>{line}</p>);
  };

  return (
    <div className="card-detail-container">
      <div className="card-detail">
        <div className="card-image-full">
          <img
            src={
              process.env.PUBLIC_URL +
              '/img/card_full/SpellCardIllustGUI' +
              card.id +
              '.png'
            }
            alt={card.name}
          />
          <div className="card-name-overlay">{card.name}</div>
        </div>
        <div className="card-description">
          <div className="description-top">
            <h3 className="title">선택 가능한 발동 시점</h3>
            {renderActivationTiming()}
          </div>
          <div className="description-middle">
            <h3 className="title">선택 가능한 발동 대상:</h3>
            {renderActivationTarget()}
          </div>
          <div className="description-bottom">{renderDescription()}</div>
        </div>
      </div>
    </div>
  );
}

CardDetail.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    activationTiming: PropTypes.arrayOf(PropTypes.string).isRequired,
    activationTarget: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardDetail;
