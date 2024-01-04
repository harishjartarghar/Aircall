import React from 'react';
import styles from './archiveButton.module.scss';

const ArchiveButton = ({ label, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
};

export default ArchiveButton;
