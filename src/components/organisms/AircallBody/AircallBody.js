import React, { useState } from 'react';
import useAircall, { useAircallMetadata } from '@/hooks/useAircall';
import CallCard from '@/components/molecules/CallCard';

import styles from './aircallBody.module.scss';
import { AIRCALL_TOGGLE_REQUEST } from '@/base/constants/apis.constants';
import Loader from '@/components/atoms/Loader';

const AircallBody = ({ isArchived }) => {
  const {
    data: calls,
    handleCallDetails,
    details,
    selectedId,
    handleCallToggle,
    isFetching
  } = useAircallMetadata();

  if (isFetching || !calls || calls.length <= 0) return <Loader />;

  return (
    <div className={styles.container}>
      {calls.map(({ id, is_archived, ...props }) =>
        is_archived === isArchived ? (
          <CallCard
            selected={id === selectedId}
            onClick={() => handleCallDetails(id)}
            onArchiveClick={() =>
              handleCallToggle({ id, is_archived: !is_archived }, AIRCALL_TOGGLE_REQUEST)
            }
            key={id}
            id={id}
            details={details}
            {...props}
          />
        ) : null
      )}
    </div>
  );
};

export default AircallBody;
