// app/components/GameBoard.js
"use client";
import { useState, useEffect } from "react";
import Card from "./Card";
import { createDeck } from "../utils/cards";
import styles from "@/app/home.module.css";
import Sound from "./Sound";

export default function GameBoard() {
  const [deck, setDeck] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [tryes, setTryes] = useState(0);
  const [time, setTime] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [playClickSound, setPlayClickSound] = useState(false);
  const [playCloseSound, setPlayCloseSound] = useState(false);
  const [playMatchSound, setPlayMatchSound] = useState(false);
  const [playWinSound, setPlayWinSound] = useState(false);

  // Inicializar el mazo de cartas
  useEffect(() => {
    setDeck(createDeck());
  }, []);

  useEffect(() => {
    if (gameStarted) {
      let interval;
      if (matchedCards.length < deck.length && deck.length > 0) {
        interval = setInterval(() => {
          setTime((prevTime) => prevTime + 1);
        }, 1000); // Incrementar el tiempo cada segundo
      }
      if (matchedCards.length === deck.length) {
        clearInterval(interval);
        console.log("CLEAR INTERVAL");
        setGameStarted(false);
        setPlayWinSound(true);
        setTimeout(() => {
          setPlayWinSound(false);
        }, 10);
      }
      return () => clearInterval(interval);
    }
  }, [gameStarted, matchedCards, deck]);

  // Manejar el clic en una carta
  const handleCardClick = (card) => {
    setPlayClickSound(false);
    if (!gameStarted) setGameStarted(true);
    setPlayClickSound(true);
    setTimeout(() => {
      setPlayClickSound(false);
    }, 10);
    console.log("Click!!!", matchedCards);
    if (
      flippedCards.length === 2 ||
      flippedCards.includes(card.id) ||
      card.matched
    )
      return;

    const newFlippedCards = [...flippedCards, card.id];
    setFlippedCards(newFlippedCards);

    // Verificar si hay una coincidencia
    if (newFlippedCards.length === 2) {
      const [firstCardId, secondCardId] = newFlippedCards;
      const firstCard = deck.find((c) => c.id === firstCardId);
      const secondCard = deck.find((c) => c.id === secondCardId);
      let matchFound = false;
      if (firstCard && secondCard && firstCard.value === secondCard.value) {
        setMatchedCards([...matchedCards, firstCard.id, secondCard.id]);
        // console.log('Matched!!!', matchedCards)

        matchFound = true;
      }

      // Voltear las cartas después de un breve retraso
      const newTryes = tryes + 1;
      setTryes(tryes + 1);
      setTimeout(() => {
        setFlippedCards([]);
        if (!matchFound) {
          setPlayCloseSound(true);
          setTimeout(() => {
            setPlayCloseSound(false);
          }, 10);
        } else {
          setPlayMatchSound(true);
          setTimeout(() => {
            setPlayMatchSound(false);
          }, 10);
        }
      }, 1000);
    }
  };

  const handleRestart = () => {
    setFlippedCards([]);
    setMatchedCards([]);
    setTryes(0);
    setDeck(createDeck());
    setTime(0);
    setGameStarted(false);
  };
  const timeFormat = (t) => {
    const minutos = Math.floor(t / 60);
    const segundos = t % 60;
    return `${minutos}:${segundos < 10 ? "0" : ""}${segundos}`;
  };
  return (
    <div>
      <div className={styles.gameBoard}>
        {deck.map((card) => (
          <Card
            key={card.id}
            card={card}
            onClick={() => handleCardClick(card)}
            flipped={
              flippedCards.includes(card.id) || matchedCards.includes(card.id)
            }
          />
        ))}
      </div>
      <div className={styles.controls}>
        <div className={styles.indicator}>Attemps: {tryes}</div>
        <div className={styles.indicator}>Time: {timeFormat(time)}</div>
        <div className={styles.restart} onClick={handleRestart}>Restart Game!</div>
      </div>
      <Sound
        src="/sounds/CardOpen.mp3"
        play={playClickSound}
        onEnded={() => {
          setPlayClickSound(false);
          console.log("WWWW");
        }}
      />
      <Sound
        src="/sounds/CardClose.mp3"
        play={playCloseSound}
        onEnded={() => {
          setPlayCloseSound(false);
          console.log("WWWW");
        }}
      />
      <Sound
        src="/sounds/CardMatch.mp3"
        play={playMatchSound}
        onEnded={() => {
          setPlayMatchSound(false);
        }}
      />
      <Sound
        src="/sounds/Winner.mp3"
        play={playWinSound}
        onEnded={() => {
          setPlayWinSound(false);
        }}
      />
    </div>
  );
}
