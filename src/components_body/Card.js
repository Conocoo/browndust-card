import React from 'react';
import './Card.css';

function Card({ card, isSelected, onSelect }) {
  return (
    <div className={`card ${isSelected ? 'selected' : ''}`} onClick={onSelect}>
      <div className="card-image-container">
        <img src={card.img} alt={card.name} className="card-image" />
        <img
          src={process.env.PUBLIC_URL + '/img/card_th/0.png'}
          alt={card.name}
          class="overlay-image"
        />
        {/* <div className="card-text-overlay">
          <p>{card.name}</p>
        </div> */}
      </div>
    </div>
  );
}

export default Card;
