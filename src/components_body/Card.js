import React from 'react';
import './Card.css';

function Card({ card, isSelected, onSelect }) {
  return (
    <div 
      className={`card ${isSelected ? 'selected' : ''}`}
      onClick={onSelect}
    >
      <div className="card-image-container">
        <img src={card.img} alt={card.name} className="card-image" />
        <div className="card-text-overlay">
          <p>{card.name}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
