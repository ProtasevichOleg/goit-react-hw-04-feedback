// StatIlem.jsx

import React from 'react';
import PropTypes from 'prop-types';
import { StyledStatItem, StatLabel, StatValue } from './StatItem.styled';

const StatItem = ({ stat }) => {
  const { label, value, name, isPercentage } = stat;

  return (
    <StyledStatItem>
      <StatLabel>{label}:</StatLabel>
      <StatValue label={name} value={value}>
        {value}
        {isPercentage && '%'}
      </StatValue>
    </StyledStatItem>
  );
};

StatItem.propTypes = {
  stat: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    isPercentage: PropTypes.bool,
  }).isRequired,
};

export default StatItem;
