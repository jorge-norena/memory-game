// app/components/GameBoard.js
'use client'; // Indica que este es un componente del cliente
import { useState, useEffect } from 'react';
import Card from './Card';
import { createDeck } from '../utils/cards';
import styles from '@/app/home.module.css'



export default function GameBoard(){
  const [deck, setDeck] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  // Inicializar el mazo de cartas
  useEffect(() => {
    setDeck(createDeck());
  }, []);

  // Manejar el clic en una carta
  const handleCardClick = (card) => {
    console.log('CARD CLICK===>', card)
    if (flippedCards.length === 2 || flippedCards.includes(card.id) || card.matched) return;
    console.log('Continua condicional')
    const newFlippedCards = [...flippedCards, card.id];
    console.log('CARD newFlippedCards ===>', newFlippedCards)
    setFlippedCards(newFlippedCards);

    // Verificar si hay una coincidencia
    if (newFlippedCards.length === 2) {
      const [firstCardId, secondCardId] = newFlippedCards;
      const firstCard = deck.find((c) => c.id === firstCardId);
      const secondCard = deck.find((c) => c.id === secondCardId);

      if (firstCard && secondCard && firstCard.value === secondCard.value) {
        setMatchedCards([...matchedCards, firstCard.id, secondCard.id]);
      }
      console.log('No Hay asierto!!! despues de dos clics')

      // Voltear las cartas después de un breve retraso
      setTimeout(() => setFlippedCards([]), 1000);
    }
  };

  return (
    <div>
    <div className={styles.gameBoard}>
      {deck.map((card) => (
        <Card
          key={card.id}
          card={card}
          onClick={() => handleCardClick(card)}
          flipped={flippedCards.includes(card.id) || matchedCards.includes(card.id)}
        />
      ))}
    </div>
    </div>
  );
};
