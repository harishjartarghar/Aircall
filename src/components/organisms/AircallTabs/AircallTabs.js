import React, { useState } from 'react';
import cx from 'classnames';

import styles from './aircallTabs.module.scss';
import AircallBody from '../AircallBody';
import { useAircallMetadata } from '@/hooks/useAircall';
import ArchiveButton from '@/components/molecules/ArchiveButton';
import {
  AIRCALL_TOGGLE_REQUEST,
  AIRCALL_TOGGLE_REQUEST_RESET
} from '@/base/constants/apis.constants';

const AircallTabs = () => {
  const { handleResetCallDetails, handleReset, handleArchiveAll } = useAircallMetadata();

  const tabs = [
    {
      label: 'Inbox',
      value: 'inbox',
      id: 'inbox'
    },
    {
      label: 'Archive',
      value: 'archive',
      id: 'archive'
    }
  ];

  const tabsConfig = {
    inbox: {
      isArchived: false,
      label: 'Archive all Calls',
      onClick: () => handleArchiveAll(AIRCALL_TOGGLE_REQUEST)
    },
    archive: {
      isArchived: true,
      label: 'unArchive all Calls',
      onClick: () => handleReset(AIRCALL_TOGGLE_REQUEST_RESET)
    }
  };

  const [currentTab, setCurrentTab] = useState('inbox');

  const handleTabChange = (e) => {
    setCurrentTab(e.target.id);
    handleResetCallDetails();
  };

  const props = tabsConfig[currentTab];

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        {tabs.map((tab, i) => (
          <button
            className={cx(styles.tabsButton, { [styles.active]: currentTab === tab.value })}
            key={i}
            id={tab.id}
            onClick={handleTabChange}>
            {tab.label}
          </button>
        ))}
      </div>
      <ArchiveButton {...props} />
      <AircallBody {...props} />
    </div>
  );
};

export default AircallTabs;
