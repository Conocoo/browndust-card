import React, { useState } from 'react';
import './CardList.css';
import Card from './Card';
import CardDetail from './CardDetail';
import cards from '../data/cards'; // 카드 데이터 임포트

function CardList() {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div>
      <div className="card-list">
        {cards.map(card => (
          <Card 
            key={card.id}
            card={card}
            isSelected={selectedCard === card.id}
            onSelect={() => setSelectedCard(card.id)}
          />
        ))}
      </div>
      {selectedCard && (
        <CardDetail card={cards.find(card => card.id === selectedCard)} />
      )}
    </div>
  );
}

export default CardList;
