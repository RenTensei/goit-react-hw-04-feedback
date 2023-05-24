import React, { useState } from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';
import { Wrapper } from './App.styled';

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export function App() {
  const [state, setState] = useState(initialState);

  const handleIncrement = option => {
    setState(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return Object.values(state).reduce((acc, value) => (acc += value), 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((state.good / countTotalFeedback()) * 100);
  };

  return (
    <Wrapper>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={handleIncrement}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            feedback={state}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </Wrapper>
  );
}
