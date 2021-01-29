import React, { useState } from 'react';
import Container from '../Container';
import Section from '../Section';
import Controls from '../Controls';
import Statistics from '../Statistics';
import Notification from '../Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total ? +((good / total) * 100).toFixed(0) : 0;
  };

  const handleFeedback = ({ target }) => {
    const feedbackType = target.dataset.action;
    switch (feedbackType) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
    target.blur();
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <Controls
          options={['good', 'neutral', 'bad']}
          clickHandler={handleFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            percent={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </Container>
  );
}

export default App;