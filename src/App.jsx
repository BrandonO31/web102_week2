import React, { useState, useEffect } from 'react';
import './app.css';

const flashcards = [
  { question: 'What is the capital of the United States?', answer: 'Washington, D.C.' },
  { question: 'What is the capital of Canada?', answer: 'Ottawa' },
  { question: 'What is the capital of Mexico?', answer: 'Mexico City' },
  { question: 'What is the capital of Ecuador?', answer: 'Quito' },
  { question: 'What is the capital of England?', answer: 'London' },
  { question: 'What is the capital of Italy?', answer: 'Rome' },
  { question: 'What is the capital of Nigeria?', answer: 'Abuja' },
  { question: 'What is the capital of Japan?', answer: 'Tokyo' },
  { question: 'What is the capital of Australia?', answer: 'Canberra' },
  { question: 'What is the capital of Brazil?', answer: 'Brasília' },
];

const App = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    
    document.querySelector('.flashcard-app').classList.add('shake');
    setTimeout(() => {
      document.querySelector('.flashcard-app').classList.remove('shake');
    }, 500);
  }, [isFlipped]);

  const handleNextCard = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % flashcards.length);
    setIsFlipped(false);
  };

  const handleCardClick = () => {
    setIsFlipped(!isFlipped); 
  };

  return (
    <div className={`flashcard-app ${isFlipped ? 'flipped' : ''}`}>
      <h1>Guess the Capitol App</h1>
      <p>Total Cards: {flashcards.length}</p>

      <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
        <h2>Card {currentCard + 1}</h2>
        <p>{isFlipped ? 'Answer' : 'Question'}: {isFlipped ? flashcards[currentCard].answer : flashcards[currentCard].question}</p>
      </div>

      <button onClick={handleNextCard}>Next Card</button>
    </div>
  );
};

export default App;
