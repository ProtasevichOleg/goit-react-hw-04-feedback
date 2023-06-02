// Statistics.jsx

import React from 'react';
import PropTypes from 'prop-types';

import { StatList, StatItem, StatLabel, StatValue } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <StatList>
    <StatItem>
      <StatLabel>Good:</StatLabel>
      <StatValue label="good">{good}</StatValue>
    </StatItem>
    <StatItem>
      <StatLabel>Neutral:</StatLabel>
      <StatValue label="neutral">{neutral}</StatValue>
    </StatItem>
    <StatItem>
      <StatLabel>Bad:</StatLabel>
      <StatValue label="bad">{bad}</StatValue>
    </StatItem>
    <StatItem>
      <StatLabel>Total:</StatLabel>
      <StatValue label="total">{total}</StatValue>
    </StatItem>
    <StatItem>
      <StatLabel>Positive feedback:</StatLabel>{' '}
      <StatValue label="positivePercentage" value={positivePercentage}>
        {positivePercentage}%
      </StatValue>
    </StatItem>
  </StatList>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
