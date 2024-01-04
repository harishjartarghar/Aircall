import React from 'react';
import cx from 'classnames';

import styles from './callCard.module.scss';
import {
  CALL_BOUNDING_TYPE_IMAGES,
  CALL_TYPES_BORDER_STYLES,
  CALL_TYPES_LABELS,
  CALL_TYPES_LABELS_STYLES
} from './callCard.constants';
import ExpandedCardDetails from '../ExpandedCardDetails';

const CallCard = (props) => {
  const { call_type, direction, from, duration, created_at, onClick, selected } = props;
  const callLabel = CALL_TYPES_LABELS[call_type];

  const date1 = new Date(created_at);
  return (
    <div>
      <div className={cx(styles.container, CALL_TYPES_BORDER_STYLES[call_type])} onClick={onClick}>
        <div className={styles.imageAndToName}>
          <img
            width="32"
            height="32"
            src={
              CALL_BOUNDING_TYPE_IMAGES[direction] ||
              'https://static.thenounproject.com/png/762492-200.png'
            }
          />
          <div className={styles.details}>
            <span className={styles.to}>{from || 'Unknown'}</span>
            <div className={styles.durationAndTime}>
              <span className={styles.created_at}>{date1.toLocaleString()}</span>
            </div>
          </div>
        </div>
        {call_type && (
          <div
            className={cx(styles.label, CALL_TYPES_LABELS_STYLES[call_type])}>{`${callLabel}`}</div>
        )}
      </div>
      {selected && <ExpandedCardDetails {...props} />}
    </div>
  );
};

export default CallCard;
