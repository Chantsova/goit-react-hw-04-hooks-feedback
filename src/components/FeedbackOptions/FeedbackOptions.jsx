import './FeedbackOptions.css';
import React from 'react';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className="feedback">
      {options.map(option => (
        <button
          className="feedback__btn"
          type="button"
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
