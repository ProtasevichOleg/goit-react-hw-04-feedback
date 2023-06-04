import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import Layout from './layout';
import useFeedback from 'hooks/useFeedback';

const App = () => {
  const {
    feedback,
    handleFeedback,
    countTotalFeedback,
    countPositivePercentage,
  } = useFeedback();

  return (
    <Layout>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositivePercentage()}
          />
        )}
      </Section>
    </Layout>
  );
};

export default App;
