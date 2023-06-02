// Statistics.styled.jsx

import styled from 'styled-components';

const getPositivePercentageColor = value => {
  if (value < 20) {
    return 'red';
  } else if (value >= 80) {
    return 'green';
  } else {
    return 'inherit';
  }
};

const getValueColor = (label, value) => {
  switch (label) {
    case 'good':
      return 'green';

    case 'bad':
      return 'red';

    case 'positivePercentage':
      return getPositivePercentageColor(value);

    default:
      return 'inherit';
  }
};

export const StatList = styled.ul`
  width: 300px;
`;

export const StatItem = styled.li`
  display: flex;
  align-items: center;
  height: 30px;
  width: 100%;
  padding-left: 20px;
  background-color: ${props => props.theme.colors.statListMainBgColor};
  :nth-child(even) {
    background-color: ${props => props.theme.colors.statListEvenBgColor};
  }
`;

export const StatLabel = styled.span`
  width: 50%;
`;

export const StatValue = styled.span`
  width: 50%;
  font-weight: 700;
  color: ${props => getValueColor(props.label, props.value)};
`;
