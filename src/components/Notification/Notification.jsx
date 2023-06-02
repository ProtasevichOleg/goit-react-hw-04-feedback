// Notification.jsx

import React from 'react';
import PropTypes from 'prop-types';
import { NotificationEl } from './Notification.styled';

const Notification = ({ message }) => (
  <NotificationEl>{message}</NotificationEl>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
