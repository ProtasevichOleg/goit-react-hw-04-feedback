// FeebackOptions.jsx

import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackButtonSet, FeedbackButton } from './FeedbackOptions.styled';

const emojis = {
  good: '😄',
  neutral: '😐',
  bad: '😢',
};

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <FeedbackButtonSet>
    {options.map(option => (
      <FeedbackButton
        key={option}
        type="button"
        data-emoji={emojis[option]}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </FeedbackButton>
    ))}
  </FeedbackButtonSet>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
