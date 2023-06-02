// FeedbackOptions.styled.jsx

import styled from 'styled-components';

export const FeedbackButtonSet = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const FeedbackButton = styled.button`
  width: 150px;
  height: 30px;
  position: relative;
  border: 1px solid;
  border-radius: 10px;

  &::before {
    content: attr(data-emoji);
    position: absolute;
    left: 10px;
    scale: 160%;
  }
`;
