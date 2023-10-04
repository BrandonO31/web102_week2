import React from 'react';

const Flashcard = ({ question, answer }) => {
  return (
    <div className="flashcard">
      <h2>Question</h2>
      <p>{question}</p>

      <h2>Answer</h2>
      <p>{answer}</p>
    </div>
  );
};

export default Flashcard;
