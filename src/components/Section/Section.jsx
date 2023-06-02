// Section.jsx

import React from 'react';
import PropTypes from 'prop-types';
import { SectionEl, SectionTitle } from './Section.styled';

const Section = ({ title, children }) => (
  <SectionEl>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </SectionEl>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
