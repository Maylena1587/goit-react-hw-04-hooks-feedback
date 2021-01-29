import React from 'react';
import styles from './Notification.module.css';

function Notification({ message }) {
  return <div className={styles.notification}>{message}</div>;
}

export default Notification;