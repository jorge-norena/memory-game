// app/utils/cards.js
export const cardData = [
  { id: 1, value: "A", matched: false },
  { id: 2, value: "B", matched: false },
  { id: 3, value: "C", matched: false },
  { id: 4, value: "D", matched: false },
  { id: 5, value: "E", matched: false },
  { id: 6, value: "F", matched: false },
  { id: 7, value: "G", matched: false },
  { id: 8, value: "H", matched: false },
  { id: 9, value: "I", matched: false },
  { id: 10, value: "J", matched: false },
  { id: 11, value: "K", matched: false },
  { id: 12, value: "L", matched: false },
];



// Crear y barajar el mazo de cartas
export const createDeck = () => {
  // Duplicar las cartas y asignar IDs únicos
  const deck = cardData
    .map((card, index) => ({ ...card, id: `${card.id}-${index}` })) // Primera copia
    .concat(
      cardData.map((card, index) => ({
        ...card,
        id: `${card.id}-${index + cardData.length}`,
      }))
    ); // Segunda copia

  // Barajar las cartas
  return deck.sort(() => Math.random() - 0.5);
};
