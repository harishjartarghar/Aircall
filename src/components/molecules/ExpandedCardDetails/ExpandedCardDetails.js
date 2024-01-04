import React from 'react';
import cx from 'classnames';

import styles from './ExpandedCardDetails.module.scss';

const ExpandedCardDetails = ({ from, to, duration, direction, created_at, onArchiveClick }) => {
  const date1 = new Date(created_at);

  return (
    <div className={styles.container}>
      <div className={styles.toAndFrom}>
        <div className={styles.from}>{`From: ${from || 'Unknown'}`}</div>
        <div className={styles.to}>{`To: ${to}`}</div>
      </div>
      <div className={styles.duration}>{`Duration: ${duration}s`}</div>
      <div className={styles.duration}>{direction}</div>
      <div className={styles.toAndFrom}>
        <div className={styles.duration}>{`Time: ${date1.toLocaleString()}`}</div>
        <img
          onClick={onArchiveClick}
          width={'32'}
          height={32}
          src="https://cdn.iconscout.com/icon/free/png-256/free-archive-1780603-1513758.png"
        />
      </div>
    </div>
  );
};

export default ExpandedCardDetails;
