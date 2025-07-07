import React, { useState } from 'react';

const Quiz = () => {
  const question = [
    "What is the Capital of India?",
    "What is the Capital of USA?",
    "What is the Capital of Australia?",
    "Which Plant is Known as the King of Fruits?",
    "Which Planet is the largest in our Solar System?",
  ];

  const [current, setCurrent] = useState(0);

  function nextQuestion() {
    if (current < question.length - 1) {
      setCurrent(prev => prev + 1);
    }
  }

  function prev() {
    if (current > 0) {
      setCurrent(prev => prev - 1);
    }
  }

  return (
    <>
      <p>Question {current + 1} of {question.length}</p>
      <h1>{question[current]}</h1>
      <button onClick={prev}>Prev</button>
      <button onClick={nextQuestion}>Next</button>
    </>
  );
};

export default Quiz;
