// Statistics.jsx

import PropTypes from 'prop-types';
import StatItem from 'components/StatItem';

import { StatList } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const stats = [
    { label: 'Good', value: good, name: 'good' },
    { label: 'Neutral', value: neutral, name: 'neutral' },
    { label: 'Bad', value: bad, name: 'bad' },
    { label: 'Total', value: total, name: 'total' },
    {
      label: 'Positive feedback',
      value: positivePercentage,
      name: 'positivePercentage',
      isPercentage: true,
    },
  ];

  return (
    <StatList>
      {stats.map(stat => (
        <StatItem key={stat.name} stat={stat} />
      ))}
    </StatList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
