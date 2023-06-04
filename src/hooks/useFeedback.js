// useFeedback.js

import { useState, useCallback } from 'react';

const useFeedback = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = useCallback(type => {
    setFeedback(currentFeedback => ({
      ...currentFeedback,
      [type]: currentFeedback[type] + 1,
    }));
  }, []);

  const countTotalFeedback = useCallback(
    () => Object.values(feedback).reduce((a, b) => a + b, 0),
    [feedback]
  );

  const countPositivePercentage = useCallback(() => {
    const total = countTotalFeedback();
    return total === 0 ? 0 : Math.round((feedback.good / total) * 100);
  }, [countTotalFeedback, feedback.good]);

  return {
    feedback,
    handleFeedback,
    countTotalFeedback,
    countPositivePercentage,
  };
};

export default useFeedback;
