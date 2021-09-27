import React, { useState } from 'react';
import './CounterFeedbacks.css';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';

export default function CounterFeedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const optionsFeedback = ['Good', 'Neutral', 'Bad'];

  const handelAddFeedback = option => {
    switch (option) {
      case optionsFeedback[0]:
        setGood(state => state + 1);
        break;

      case optionsFeedback[1]:
        setNeutral(state => state + 1);
        break;

      case optionsFeedback[2]:
        setBad(state => state + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.floor((good / countTotalFeedback()) * 100);
  };

  return (
    <>
      <div className="wrapper">
        <Section
          title={'Magical unicorns want your opinion!'}
          children={
            <FeedbackOptions
              options={optionsFeedback}
              onLeaveFeedback={handelAddFeedback}
            />
          }
        />

        {countTotalFeedback() > 0 ? (
          <Section
            title={'Statistics'}
            children={
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback()}
                positivePercentage={countPositiveFeedbackPercentage()}
              />
            }
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </div>
    </>
  );
}
